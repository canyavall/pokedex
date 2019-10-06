import {MyPokemonState} from './MyPokemonTypes';

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
}

export default MyPokemonReducer