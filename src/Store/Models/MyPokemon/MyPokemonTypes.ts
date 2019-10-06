import {OrderPokedexBy} from "../Pokedex/PokedexTypes";

export interface MyPokemonState {
    myPokemonList: string[];
    myPokemonListCurrentPage: number;
    myPokemonListElementsToShow: number;
    myPokemonListOrderBy: OrderPokedexBy
}