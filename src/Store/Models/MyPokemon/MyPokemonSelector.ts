import {State} from "../../store";
import {PokedexListCurrentPage, PokedexListElementsToShow} from "../Pokedex/PokedexTypes";

// Unmemoized functions for MyPokemon
export const getMyPokemonList = (state: State): number[] => state.mypokemon.myPokemonList

export const getMyPokemonListCurrentPage = (state: State): PokedexListCurrentPage => state.mypokemon.myPokemonListCurrentPage
export const getMyPokemonListElementsToShow = (state: State): PokedexListElementsToShow => state.mypokemon.myPokemonListElementsToShow

export const getMyPokemonListWithData = (state: State) => {
    let myPokemons = []
    state.mypokemon.myPokemonList.forEach((id) => {
        state.pokedex.pokemons.find((pokemon) => {
            (pokemon.id === id) && myPokemons.push(pokemon)
        })
    })

    return myPokemons
}

export const isPokemonInMyPokemons = (state: State) => (id: number) => {
    return state.mypokemon.myPokemonList.includes(id)
}