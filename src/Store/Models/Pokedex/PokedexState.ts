import {OrderPokedexBy, PokedexState, RequestState} from "./PokedexTypes";

const pokedexInitialState: PokedexState = {
    pokemons: undefined,
    pokemonsRequestState: RequestState.Initial,
    pokemonRequestState: RequestState.Initial,

    types: [],
    typesRequestState: RequestState.Initial,

    pokedexListCurrentPage: 1,
    pokedexListElementsToShow: 20,
    pokedexListOrderBy: OrderPokedexBy.number
}

export default pokedexInitialState