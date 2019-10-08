import {OrderPokedexBy} from "../Pokedex/PokedexTypes";

export interface MyPokemonState {
    myPokemonList: number[];
    myPokemonListCurrentPage: number;
    myPokemonListElementsToShow: number;
    myPokemonListOrderBy: OrderPokedexBy
}