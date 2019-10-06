import {useSelector} from 'react-redux'
import select from "../../Store/selectors";

const useMyPokemons = () => {

    // Get data from reducer
    const myPokemonsList = useSelector(select.mypokemon.getMyPokemonList)
    const myPokemonsListWithData = useSelector(select.mypokemon.getMyPokemonListWithData)
    const myPokemonListCurrentPage = useSelector(select.mypokemon.getMyPokemonListCurrentPage)
    const myPokemonListElementsToShow = useSelector(select.mypokemon.getMyPokemonListElementsToShow)
    const myPokemonListOrderBy = useSelector(select.mypokemon.getMyPokemonListOrderBy)

    // Prepare constants
    const maxIndex = myPokemonListCurrentPage * myPokemonListElementsToShow
    const numberOfPokemons = (myPokemonsList && myPokemonsList.length) || myPokemonListElementsToShow
    const numberOfPages = Math.ceil((numberOfPokemons / myPokemonListElementsToShow))
    
    return {
        myPokemonsListWithData,
        myPokemonListCurrentPage,
        myPokemonListElementsToShow,

        numberOfPokemons,
        numberOfPages,
        maxIndex,
    }
}

export default useMyPokemons