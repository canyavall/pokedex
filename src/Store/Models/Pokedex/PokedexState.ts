/**
 * Initial state for the module Channels
 **/
import {PokedexState, RequestState} from "./PokedexTypes";

const pokedexInitialState: PokedexState = {
    pokemons: undefined,
    pokemonsRequestState: RequestState.Initial,
    pokemonRequestState: RequestState.Initial,

    types: [],
    typesRequestState: RequestState.Initial

}

export default pokedexInitialState