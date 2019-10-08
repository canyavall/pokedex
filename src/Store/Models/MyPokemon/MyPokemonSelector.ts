import {State} from "../../store";
import {PokedexListCurrentPage, PokedexListElementsToShow, PokedexListOrderBy} from "../Pokedex/PokedexTypes";

// Unmemoized functions for MyPokemon
export const getMyPokemonList = (state: State): number[] => state.mypokemon.myPokemonList

export const getMyPokemonListCurrentPage = (state: State): PokedexListCurrentPage => state.mypokemon.myPokemonListCurrentPage
export const getMyPokemonListElementsToShow = (state: State): PokedexListElementsToShow => state.mypokemon.myPokemonListElementsToShow
export const getMyPokemonListOrderBy = (state: State): PokedexListOrderBy => state.mypokemon.myPokemonListOrderBy

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