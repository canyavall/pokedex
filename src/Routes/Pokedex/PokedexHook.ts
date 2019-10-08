import {useEffect, useState} from "react";
import {useSelector} from 'react-redux'
import select from "../../Store/selectors";
import store from "../../Store/store";
import {Pokemon} from "../../Store/Models/Pokedex/PokedexTypes";

export interface UsePokedex {
    pokemons: Pokemon[],
    pokedexListCurrentPage: number;
    pokedexListElementsToShow: number;
    pokedexListOrderBy: string;
    search: string;
    setSearch: Function;
    maxIndex: number;
    numberOfPages: number;
}

const usePokedex = (): UsePokedex => {
    const [search, setSearch] = useState(undefined)

    // Get data from reducer
    let pokemons = useSelector(select.pokedex.getPokemons)
    const pokedexListCurrentPage = useSelector(select.pokedex.getPokedexListCurrentPage)
    const pokedexListElementsToShow = useSelector(select.pokedex.getPokedexListElementsToShow)
    const pokedexListOrderBy = useSelector(select.pokedex.getPokedexListOrderBy)

    // Fetch data
    useEffect(() => {
        !pokemons && store.dispatch.pokedex.fetchPokemons()
    }, [pokemons])

    // Prepare constants
    const maxIndex = pokedexListCurrentPage * pokedexListElementsToShow
    const numberOfPokemons = (pokemons && Object.keys(pokemons).length) || pokedexListElementsToShow
    const numberOfPages = Math.floor(numberOfPokemons / pokedexListElementsToShow)

    if (search && search.length > 2) {
        pokemons = pokemons.filter((pokemon) => {
            if (pokemon.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                return pokemon
            }
        })
    }
    console.log(search)
    return {
        pokemons,
        pokedexListCurrentPage,
        pokedexListElementsToShow,
        pokedexListOrderBy,

        search,
        setSearch,

        maxIndex,
        numberOfPages
    }
}

export default usePokedex