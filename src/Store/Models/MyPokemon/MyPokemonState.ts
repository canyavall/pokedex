import {MyPokemonState} from "./MyPokemonTypes"
import {OrderPokedexBy} from "../Pokedex/PokedexTypes";

/**
 * Initial state for the module Channels
 **/
const myPokemonInitialState: MyPokemonState = {
    myPokemonList: [],

    myPokemonListCurrentPage: 1,
    myPokemonListElementsToShow: 20,
    myPokemonListOrderBy: OrderPokedexBy.number
}

export default myPokemonInitialState