import {useSelector} from 'react-redux'
import select from "../../Store/selectors";

const useMyPokemons = () => {

    // Get data from reducer
    const myPokemons = useSelector(select.mypokemon.getMyPokemonListWithData)


    return {
        myPokemons
    }
}

export default useMyPokemons