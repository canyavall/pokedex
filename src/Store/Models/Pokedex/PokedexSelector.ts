import {State} from "../../store";
import {PokedexListCurrentPage, PokedexListElementsToShow, PokedexListOrderBy, Pokemon} from "./PokedexTypes";

// Unmemoized functions for Pokedex
export const getPokemons = (state: State): Pokemon[] => state.pokedex.pokemons

export const getPokedexListCurrentPage = (state: State): PokedexListCurrentPage => state.pokedex.pokedexListCurrentPage
export const getPokedexListElementsToShow = (state: State): PokedexListElementsToShow => state.pokedex.pokedexListElementsToShow
export const getPokedexListOrderBy = (state: State): PokedexListOrderBy => state.pokedex.pokedexListOrderBy

export const getPokemonsListName = (state: State) => {
    const pokemons = state.pokedex.pokemons
    if (!pokemons) return []
    return Object.keys(pokemons).map((id) => {
        return pokemons[id].name
    })
}

