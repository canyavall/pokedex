import {useSelector} from 'react-redux'
import select from "../../Store/selectors";
import {useEffect} from "react";
import store from "../../Store/store";
import {Pokemon} from "../../Store/Models/Pokedex/PokedexTypes";

export interface UseMyPokemons {
    pokemons: Pokemon[];
    myPokemonsListWithData: number[];
    myPokemonListCurrentPage: number;
    myPokemonListElementsToShow: number;
    numberOfPokemons: number;
    numberOfPages: number;
    maxIndex: number;
}

const useMyPokemons = (): UseMyPokemons => {

    const pokemons = useSelector(select.pokedex.getPokemons)

    // Get data from reducer
    const myPokemonsList = useSelector(select.mypokemon.getMyPokemonList)
    const myPokemonsListWithData = useSelector(select.mypokemon.getMyPokemonListWithData)
    const myPokemonListCurrentPage = useSelector(select.mypokemon.getMyPokemonListCurrentPage)
    const myPokemonListElementsToShow = useSelector(select.mypokemon.getMyPokemonListElementsToShow)

    // Prepare constants
    const maxIndex = myPokemonListCurrentPage * myPokemonListElementsToShow
    const numberOfPokemons = (myPokemonsList && myPokemonsList.length) || myPokemonListElementsToShow
    const numberOfPages = Math.ceil((numberOfPokemons / myPokemonListElementsToShow))

    return {
        pokemons,

        myPokemonsListWithData,
        myPokemonListCurrentPage,
        myPokemonListElementsToShow,

        numberOfPokemons,
        numberOfPages,
        maxIndex,
    }
}

export default useMyPokemons