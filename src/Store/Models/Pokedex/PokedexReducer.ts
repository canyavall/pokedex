// @ts-ignore
import {Details, OrderPokedexBy, PokedexState, PokemonResponse} from "./PokedexTypes"

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
        let pokemons = []
        // get id and save in the object for each one of the pokemons
        payload.results.forEach((pokemon) => {
            const {name, url} = pokemon
            //@ts-ignore
            const id = url.replace('https://pokeapi.co/api/v2/pokemon/', '')
            const cleanId = Number(id.substring(0, id.length - 1))
            // Remove some strange pokemons
            if (cleanId.toString().length <= 3) {
                pokemons.push({
                    name: name,
                    url: url,
                    id: cleanId
                })
            }
        })

        return {
            ...state,
            pokemons: pokemons
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
     * Change current page for pagination
     * @param state
     * @param payload
     */
    setPokedexListCurrentPage: (state: PokedexState, payload: number): PokedexState => {
        return {
            ...state,
            pokedexListCurrentPage: payload
        }
    },

    /**
     * Change number of elements to show in pokedex list
     * @param state
     * @param payload
     */
    setPokedexListElementsToShow: (state: PokedexState, payload: number): PokedexState => {
        return {
            ...state,
            pokedexListElementsToShow: payload
        }
    },

    /**
     * Change the order of the Pokemons in the Pokedex list
     * @param state
     * @param payload
     */
    setPokedexListOrderBy: (state: PokedexState, payload: OrderPokedexBy): PokedexState => {
        return {
            ...state,
            pokedexListOrderBy: payload
        }
    }
}

export default PokedexReducer