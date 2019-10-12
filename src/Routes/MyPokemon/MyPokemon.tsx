import React from 'react';
import store from "../../Store/store";
import {Pagination, Panel} from "rsuite";
import useMyPokemons from "./MyPokemonHook";
import PokedexGrid from "../../Components/PokedexGrid/PokedexGrid";

const MyPokemon: React.FC = () => {
    const {
        myPokemonsListWithData,
        numberOfPages,
        myPokemonListElementsToShow,
        myPokemonListCurrentPage,
        maxIndex
    } = useMyPokemons()

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
        activePage: myPokemonListCurrentPage,
        onSelect: store.dispatch.mypokemon.setMyPokemonListCurrentPage,
        style: styles.pagination
    }

    return (
        <>
            <Panel style={styles.panelStyle} bordered>
                <div style={styles.gridContainer}>
                    <PokedexGrid pokemons={myPokemonsListWithData}
                                 elementsToShow={myPokemonListElementsToShow}
                                 maxIndex={maxIndex}/>
                </div>
            </Panel>
            <Pagination {...paginationProps}/>
        </>
    )
}

const styles = {
    gridContainer: {
        display: 'flex',
        width: "100%",
        flexWrap: 'wrap'
    } as React.CSSProperties,
    panelStyle: {
        paddingLeft: 20
    } as React.CSSProperties,
    pagination: {
        display: 'flex',
        justifyContent: 'flex-end'
    } as React.CSSProperties
}

export default MyPokemon;
