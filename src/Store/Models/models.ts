import {createModel} from '@rematch/core';
import MyPokemonState from "./MyPokemon/MyPokemonState";
import MyPokemonReducer from "./MyPokemon/MyPokemonReducer";
import PokedexState from "./Pokedex/PokedexState";
import PokedexReducer from "./Pokedex/PokedexReducer";
import PokedexEffects from "./Pokedex/PokedexEffects";

const mypokemonModel = {
    state: MyPokemonState,
    reducers: MyPokemonReducer
}

const pokedexModel = {
    state: PokedexState,
    reducers: PokedexReducer,
    effects: PokedexEffects
}

const pokedex = createModel(pokedexModel)
const mypokemon = createModel(mypokemonModel)

const models = {
    pokedex,
    mypokemon
}

export default models