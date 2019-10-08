import {RequestState} from "./PokedexTypes";
import store from "../../store";

const PokedexEffects = (dispatch) => ({

    /**
     * Fetch all pokemons
     */
    async fetchPokemons() {
        dispatch.pokedex.setPokemonsRequestState(RequestState.Loading)
        try {
            // Let's check if we have the data, and, if it is the case, don't reload it
            if (store.getState().pokedex.pokemons.length === 0) {
                const url = 'https://pokeapi.co/api/v2/pokemon/?limit=9999'
                await fetch(url)
                    .then((response) => response.json())
                    .then((data) => dispatch.pokedex.setAllPokemons(data))
            }
        } catch (e) {
            dispatch.pokedex.setPokemonsRequestState(RequestState.Error)
        }
    },

    /**
     * fetch one pokemon by id
     */
    async fetchPokemon(id: number) {
        dispatch.pokedex.setPokemonRequestState(RequestState.Loading)
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            await fetch(url)
                .then((response) => response.json())
                .then((data) => dispatch.pokedex.setPokemon(data))
        } catch (e) {
            dispatch.pokedex.setPokemonRequestState(RequestState.Error)
        }
    }
})

export default PokedexEffects
