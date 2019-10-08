import {State} from "../../store";
import {PokedexListCurrentPage, PokedexListElementsToShow} from "../Pokedex/PokedexTypes";

// Unmemoized functions for MyPokemon
export const getMyPokemonList = (state: State): number[] => state.mypokemon.myPokemonList

export const getMyPokemonListCurrentPage = (state: State): PokedexListCurrentPage => state.mypokemon.myPokemonListCurrentPage
export const getMyPokemonListElementsToShow = (state: State): PokedexListElementsToShow => state.mypokemon.myPokemonListElementsToShow

export const getMyPokemonListWithData = (state: State) => {
    let myPokemons = {}
    state.mypokemon.myPokemonList.forEach((id) => {
        myPokemons[id] = state.pokedex.pokemons.find((pokemon) => {
            if (pokemon.id === id){
                return pokemon
            }
            return false
        })
    })

    return myPokemons
}