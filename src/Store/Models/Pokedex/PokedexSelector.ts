import {State} from "../../store";
// @ts-ignore
import {Pokemons, RequestState} from "./PokedexTypes";

// Unmemoized functions for PublicChannels
export const getPokemons = (state: State): Pokemons => state.pokedex.pokemons
export const getPokemonsRequestState = (state: State): RequestState => state.pokedex.pokemonsRequestState
export const getPokemonRequestState = (state: State): RequestState => state.pokedex.pokemonRequestState

// Memoized functions for PublicChannels