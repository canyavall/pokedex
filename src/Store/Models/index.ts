// Custom components
import MyPokemonState from "./MyPokemon/MyPokemonState";
import MyPokemonReducer from "./MyPokemon/MyPokemonReducer";
import PokedexState from "./Pokedex/PokedexState";
import PokedexReducer from "./Pokedex/PokedexReducer";
import PokedexEffects from "./Pokedex/PokedexEffects";

const mypokemon = {
    state: MyPokemonState,
    reducers: MyPokemonReducer
}

const pokedex = {
    state: PokedexState,
    reducers: PokedexReducer,
    effects: PokedexEffects
}

export {
    mypokemon,
    pokedex
}