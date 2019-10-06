import React from 'react';
import store from "../../Store/store";
import {Loader, Pagination, Panel} from "rsuite";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import usePokedex from "../Pokedex/PokedexHook";
import useMyPokemons from "./MyPokemonHook";

const MyPokemon: React.FC = () => {
    const {pokedexListCurrentPage, pokedexListElementsToShow, maxIndex, numberOfPages} = usePokedex()
const {myPokemons} = useMyPokemons()
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
                    {!myPokemons && <Loader size="lg" content="Large"/>}
                    {myPokemons && Object.keys(myPokemons).map((pokemon, index) => {
                        if (index >= maxIndex - pokedexListElementsToShow && index < maxIndex) {
                            return <PokemonCard key={index} pokemon={myPokemons[pokemon]}/>
                        }
                        return null
                    })}

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
