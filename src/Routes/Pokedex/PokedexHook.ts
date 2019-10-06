import {useEffect} from "react";
import {useSelector} from 'react-redux'
import select from "../../Store/selectors";
import store from "../../Store/store";

const usePokedex = () => {
    const pokemons = useSelector(select.pokedex.getPokemons)
    const pokedexListCurrentPage= useSelector(select.pokedex.getPokedexListCurrentPage)
    const pokedexListElementsToShow= useSelector(select.pokedex.getPokedexListElementsToShow)
    const pokedexListOrderBy= useSelector(select.pokedex.getPokedexListOrderBy)

    useEffect(() => {
        store.dispatch.pokedex.fetchPokemons()
    }, [])

    return {
        pokemons,
        pokedexListCurrentPage,
        pokedexListElementsToShow,
        pokedexListOrderBy
    }
}

export default usePokedex