import React from 'react';
import {Loader, Pagination, Panel} from 'rsuite';
import usePokedex from "./PokedexHook";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import store from "../../Store/store";

const Pokedex: React.FC = () => {
    const {pokemons, pokedexListCurrentPage, pokedexListElementsToShow, maxIndex, numberOfPages} = usePokedex()

    const paginationProps = {
        prev: true,
        next: true,
        first: true,
        last: true,
        ellipsis: true,
        boundaryLinks: true,
        size: "lg",
        maxButtons: 10,
        pages: numberOfPages,
        activePage: pokedexListCurrentPage,
        onSelect: store.dispatch.pokedex.setPokedexListCurrentPage,
        style: styles.pagination
    }

    return (
        <>
            <Panel style={styles.panelStyle} bordered>
                <div style={styles.gridContainer}>
                    {!pokemons && <Loader size="lg" content="Large"/>}
                    {pokemons && Object.keys(pokemons).map((pokemon, index) => {
                        if (index >= maxIndex - pokedexListElementsToShow && index < maxIndex) {
                            return <PokemonCard key={index} pokemon={pokemons[pokemon]}/>
                        }
                        return null
                    })}

                </div>
            </Panel>
            <Pagination {...paginationProps}/>
        </>
    );
}

const styles = {
    gridContainer: {
        display: 'flex',
        width: "100%",
        flexWrap: 'wrap'
    } as React.CSSProperties,
    panelStyle: {
        paddingLeft: 10
    } as React.CSSProperties,
    pagination: {
        display: 'flex',
        justifyContent: 'flex-end'
    } as React.CSSProperties
}

export default Pokedex;
