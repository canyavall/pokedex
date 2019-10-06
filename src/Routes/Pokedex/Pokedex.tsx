import React from 'react';
import {Loader, Panel} from 'rsuite';
import usePokedex from "./PokedexHook";
import PokemonCard from "./Components/PokemonCard";

const Pokedex: React.FC = () => {
    const {pokemons, pokedexListCurrentPage, pokedexListElementsToShow} = usePokedex()
    const maxIndex = pokedexListCurrentPage * pokedexListElementsToShow
    return (
        <Panel bordered>
            {!pokemons && <Loader size="lg" content="Large"/>}
            {pokemons && Object.keys(pokemons).map((pokemon, index) => {
                if (index >= maxIndex - pokedexListElementsToShow && index < maxIndex ){
                    return <PokemonCard pokemon={pokemons[pokemon]}/>
                }
            })}
        </Panel>
    );
}

export default Pokedex;
