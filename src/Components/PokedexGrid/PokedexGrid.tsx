import React from 'react'
import PokemonCard from "../PokemonCard/PokemonCard";

const PokedexGrid = (props) => {
    const {pokemons, elementsToShow, maxIndex} = props
    return (
        <>
            {pokemons.length > 0 && Object.keys(pokemons).map((pokemon, index) => {
                if (index >= maxIndex - elementsToShow && index < maxIndex) {
                    return <PokemonCard key={index} pokemon={pokemons[pokemon]}/>
                }
                return null
            })}
        </>
    )
}

export default PokedexGrid