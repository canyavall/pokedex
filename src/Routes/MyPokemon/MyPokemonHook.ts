import {useSelector} from 'react-redux'
import select from "../../Store/selectors";

const useMyPokemons = () => {

    // Get data from reducer
    const myPokemons = useSelector(select.mypokemon.getMyPokemonList)
    const myPokemonsListWithData = useSelector(select.mypokemon.getMyPokemonListWithData)


    return {
        myPokemons,
        myPokemonsListWithData
    }
}

export default useMyPokemons