import {State} from "../../store";
import {
    PokedexListCurrentPage,
    PokedexListElementsToShow, PokedexListOrderBy,
    Pokemons,
    RequestState
} from "./PokedexTypes";

// Unmemoized functions for PublicChannels
export const getPokemons = (state: State): Pokemons => state.pokedex.pokemons
export const getPokemonsRequestState = (state: State): RequestState => state.pokedex.pokemonsRequestState
export const getPokemonRequestState = (state: State): RequestState => state.pokedex.pokemonRequestState

export const getPokedexListCurrentPage = (state: State): PokedexListCurrentPage => state.pokedex.pokedexListCurrentPage
export const getPokedexListElementsToShow = (state: State): PokedexListElementsToShow => state.pokedex.pokedexListElementsToShow
export const getPokedexListOrderBy = (state: State): PokedexListOrderBy => state.pokedex.pokedexListOrderBy

// Memoized functions for PublicChannels