// @ts-ignore
import {Details, PokedexState, Pokemon, RequestState} from "./PokedexTypes"
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
    setAllPokemons: (state: PokedexState, payload: Pokemon[]): PokedexState => {
        // get id and save in the object for each one of the pokemons
        const pokemons = payload.map((pokemon) => {
            const {name, url} = pokemon
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

}

export default PokedexReducer