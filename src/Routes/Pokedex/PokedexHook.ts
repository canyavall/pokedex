import {useEffect} from "react";
import {useSelector} from 'react-redux'
import select from "../../Store/selectors";
import store from "../../Store/store";

const usePokedex = () => {

    // Get data from reducer
    const pokemons = useSelector(select.pokedex.getPokemons)
    const pokedexListCurrentPage= useSelector(select.pokedex.getPokedexListCurrentPage)
    const pokedexListElementsToShow= useSelector(select.pokedex.getPokedexListElementsToShow)
    const pokedexListOrderBy= useSelector(select.pokedex.getPokedexListOrderBy)


    // Fetch data
    useEffect(() => {
        !pokemons && store.dispatch.pokedex.fetchPokemons()
    }, [])

    // Prepare constants
    const maxIndex = pokedexListCurrentPage * pokedexListElementsToShow
    const numberOfPokemons = (pokemons && Object.keys(pokemons).length) || pokedexListElementsToShow
    const numberOfPages = Math.floor(numberOfPokemons/pokedexListElementsToShow)

    return {
        pokemons,
        pokedexListCurrentPage,
        pokedexListElementsToShow,
        pokedexListOrderBy,

        maxIndex,
        numberOfPages
    }
}

export default usePokedex