import {State} from "../../store";
import {createSelector} from "reselect";
import {getPokemons} from "../Pokedex/PokedexSelector";
import {Pokemons} from "../Pokedex/PokedexTypes";

// Unmemoized functions for MyPokemon
export const getMyPokemonList = (state: State): string[] => state.mypokemon.myPokemonList

// Memoized functions for MyPokemon

export const getMyPokemonListWithData = createSelector(
    getMyPokemonList,
    getPokemons,
    (myPokemonList: string[], pokemons: Pokemons) => {
        let myPokemons = {}
        myPokemonList.forEach((id) => {
            myPokemons[id] = pokemons[id]
        })

        return myPokemons
    })