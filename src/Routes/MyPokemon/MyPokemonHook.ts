import {useSelector} from 'react-redux'
import select from "../../Store/selectors";

export interface UseMyPokemons {
    myPokemonsListWithData: number[],
    myPokemonListCurrentPage: number,
    myPokemonListElementsToShow: number,

    numberOfPokemons: number,
    numberOfPages: number,
    maxIndex: number,
}

const useMyPokemons = (): UseMyPokemons => {

    // Get data from reducer
    const myPokemonsList = useSelector(select.mypokemon.getMyPokemonList)
    const myPokemonsListWithData = useSelector(select.mypokemon.getMyPokemonListWithData)
    const myPokemonListCurrentPage = useSelector(select.mypokemon.getMyPokemonListCurrentPage)
    const myPokemonListElementsToShow = useSelector(select.mypokemon.getMyPokemonListElementsToShow)

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