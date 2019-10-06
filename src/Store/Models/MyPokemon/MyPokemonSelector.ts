import {State} from "../../store";

// Unmemoized functions for MyPokemon
export const getMyPokemonList = (state: State): string[] => state.mypokemon.myPokemonList
export const getMyPokemonListWithData = (state: State) => {
    let myPokemons = {}
    state.mypokemon.myPokemonList.forEach((id) => {
        myPokemons[id] = state.pokedex.pokemons[id]
    })

    return myPokemons
}