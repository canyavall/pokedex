import {RequestState} from "./PokedexTypes";

const PokedexEffects = (dispatch) => ({

    /**
     * Fetch all pokemons
     */
    async fetchPokemons() {
        dispatch.pokedex.setPokemonsRequestState(RequestState.Loading)
        try {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100000'
            const data = await fetch(url)
            dispatch.pokedex.setAllPokemons(data)
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
            const data = await fetch(url)
            dispatch.pokedex.setPokemon(data)
        } catch (e) {
            dispatch.pokedex.setPokemonRequestState(RequestState.Error)
        }
    }
})

export default PokedexEffects
