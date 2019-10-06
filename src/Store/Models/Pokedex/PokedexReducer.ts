// @ts-ignore
import {Details, PokedexState, Pokemon, PokemonList, PokemonResponse, RequestState} from "./PokedexTypes"
import {keyBy} from 'lodash'

/**
 * Channels Reducer
 **/
const PokedexReducer = {
    /**
     * Get a list with all pokemons
     * @param state
     * @param payload
     */
    setAllPokemons: (state: PokedexState, payload: PokemonResponse): PokedexState => {
        console.log(payload)
        // get id and save in the object for each one of the pokemons
        const pokemons = payload.results.map((pokemon) => {
            const {name, url} = pokemon
            //@ts-ignore
            const id = url.replace('https://pokeapi.co/api/v2/pokemon/', '')
            const cleanId = Number(id.substring(0, id.length - 1))
            return {
                name: name,
                url: url,
                id: cleanId
            }
        })

        return {
            ...state,
            pokemons: keyBy(pokemons, 'id'),
            pokemonsRequestState: RequestState.Loaded
        }
    },
    /**
     * Set Pokemons request to error if fetch failed
     * @param state
     * @param payload
     */
    setPokemonsRequestState: (state: PokedexState, payload: RequestState): PokedexState => {
        return {
            ...state,
            pokemonsRequestState: RequestState.Error
        }
    },
    /**
     * Set the details from a pokemon into the pokemon in the pokemons object
     * @param state
     * @param payload
     */
    setPokemon: (state: PokedexState, payload: Details): PokedexState => {
        let newPokemons = state.pokemons
        newPokemons[payload.id].details = payload
        return {
            ...state,
            pokemons: newPokemons
        }
    },

    /**
     * Set Pokemon request to error if fetch failed
     * @param state
     * @param payload
     */
    setPokemonRequestState: (state: PokedexState, payload: RequestState): PokedexState => {
        return {
            ...state,
            pokemonRequestState: RequestState.Error
        }
    },

    setPokemonList: (state: PokedexState, payload: PokemonList) => {

    }
}

export default PokedexReducer