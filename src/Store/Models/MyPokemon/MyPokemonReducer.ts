import {MyPokemonState} from './MyPokemonTypes';
import {OrderPokedexBy, PokedexState} from "../Pokedex/PokedexTypes";

/**
 * Channels Reducer
 **/
const MyPokemonReducer = {
    /**
     * Add a pokemon id into the MyPokemon list
     * @param state
     * @param payload
     */
    addPokemon: (state: MyPokemonState, payload: string): MyPokemonState => {
        const newMyPokemonList = state.myPokemonList
        newMyPokemonList.push(payload)
        return {
            ...state,
            myPokemonList: newMyPokemonList
        }
    },

    /**
     * Removes a pokemon from the MyPokemon list
     * @param state
     * @param payload
     */
    removePokemon: (state: MyPokemonState, payload: string): MyPokemonState => {
        const newMyPokemonList = state.myPokemonList.filter((id) => id !== payload)
        return {
            ...state,
            myPokemonList: newMyPokemonList
        }
    },

    /**
     * Change current page for pagination
     * @param state
     * @param payload
     */
    setMyPokemonListCurrentPage: (state: PokedexState, payload: number): PokedexState => {
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
    setMyPokemonListElementsToShow: (state: PokedexState, payload: number): PokedexState => {
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
    setMyPokemonListOrderBy: (state: PokedexState, payload: OrderPokedexBy): PokedexState => {
        return {
            ...state,
            pokedexListOrderBy: payload
        }
    }
}

export default MyPokemonReducer