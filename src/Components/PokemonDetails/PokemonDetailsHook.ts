import store from "../../Store/store";
import {extractAbilitiesFromData, extractStatsFromData} from "../../Utils/utils";
import select from "../../Store/selectors";
import {useSelector} from 'react-redux'

export interface UsePokemonDetails {

}

const usePokemonDetails = ({pokemon, pokemonDetails, setShowModal}) => {
    const {name, id} = pokemon

    const myPokemonList = useSelector(select.mypokemon.getMyPokemonList)

    const finalId = id.toString().padStart(3, "000")
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${finalId}.png`

    const abilities = extractAbilitiesFromData(pokemonDetails)
    const stats = extractStatsFromData(pokemonDetails)
    const height = pokemonDetails && pokemonDetails.height && ((pokemonDetails.height / 10).toString() + ' m')
    const weight = pokemonDetails && pokemonDetails.weight && ((pokemonDetails.weight / 10).toString() + ' kg')

    const addPokemon = (e) => {
        store.dispatch.mypokemon.addPokemon(id)
        closeModal(e)
    }

    const removePokemon = (e) => {
        store.dispatch.mypokemon.removePokemon(id)
        closeModal(e)
    }

    const closeModal = (e) => {
        setShowModal(false)
        e && e.stopPropagation()
    }

    // Checks if this pokemon id is already in mypokemons list
    const isInMyPokemons = myPokemonList.includes(id)

    return {
        id,
        name,
        finalId,
        imageUrl,

        abilities,
        height,
        weight,
        stats,

        addPokemon,
        removePokemon,
        closeModal,

        isInMyPokemons
    }
}

export default usePokemonDetails