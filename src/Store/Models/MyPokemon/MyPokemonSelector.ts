import {State} from "../../store";

// Unmemoized functions for MyPokemon
export const getMyPokemonList = (state: State): string[] => state.mypokemon.myPokemonList

// Memoized functions for MyPokemon