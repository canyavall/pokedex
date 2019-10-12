import React from 'react'
import Loader from "rsuite/es/Loader/Loader";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokedexList = (props) => {
    const {listWithData, pokemons, elementsToShow, maxIndex} = props
    return (
        <>
            {(!listWithData || pokemons.length===0) && <Loader size="lg" content="Large"/>}
            {listWithData && pokemons.length > 0 && Object.keys(listWithData).map((pokemon, index) => {
                if (index >= maxIndex - elementsToShow && index < maxIndex) {
                    return <PokemonCard key={index} pokemon={listWithData[pokemon]}/>
                }
                return null
            })}

        </>
    )
}

export default PokedexList