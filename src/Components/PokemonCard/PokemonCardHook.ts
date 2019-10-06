import {useState} from "react";
import store from "../../Store/store";
import select from "../../Store/selectors";
import {useSelector} from 'react-redux'

const usePokemonCard = (pokemon) => {
    const {name, id} = pokemon

    const [showPicture, setShowPicture] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const pokemons = useSelector(select.pokedex.getPokemons)
    const pokemonDetails = pokemons && pokemons[id] && pokemons[id].details

    let finalId = id.toString().padStart(3, "000")
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${finalId}.png`

    const onOpenDetail = async() => {
        !pokemonDetails && await store.dispatch.pokedex.fetchPokemon(id)
        setShowModal(true)
    }

    return {
        showPicture,
        setShowPicture,

        showModal,
        setShowModal,

        imageUrl,
        finalId,

        onOpenDetail,

        pokemonDetails
    }
}

export default usePokemonCard