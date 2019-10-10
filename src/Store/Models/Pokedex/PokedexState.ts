import {OrderPokedexBy, PokedexState} from "./PokedexTypes";

const pokedexInitialState: PokedexState = {
    pokemons: [],

    pokedexListCurrentPage: 1,
    pokedexListElementsToShow: 20,
    pokedexListOrderBy: OrderPokedexBy.number
}

export default pokedexInitialState