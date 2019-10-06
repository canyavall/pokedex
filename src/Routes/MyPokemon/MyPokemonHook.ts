import {useSelector} from 'react-redux'
import select from "../../Store/selectors";

const useMyPokemons = () => {

    // Get data from reducer
    const myPokemonsListWithData = useSelector(select.mypokemon.getMyPokemonListWithData)
    console.log("data returned", myPokemonsListWithData)

    return {
        myPokemonsListWithData
    }
}

export default useMyPokemons