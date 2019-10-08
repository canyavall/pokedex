import React from 'react';
import store from "../../Store/store";
import {Loader, Pagination, Panel} from "rsuite";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import useMyPokemons from "./MyPokemonHook";

const MyPokemon: React.FC = () => {
    const {myPokemonsListWithData,
        numberOfPages,
        myPokemonListElementsToShow,
        myPokemonListCurrentPage,
        maxIndex,
        pokemons} = useMyPokemons()

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
                    {(!myPokemonsListWithData || pokemons.length===0) && <Loader size="lg" content="Large"/>}
                    {myPokemonsListWithData && pokemons.length > 0 && Object.keys(myPokemonsListWithData).map((pokemon, index) => {
                        if (index >= maxIndex - myPokemonListElementsToShow && index < maxIndex) {
                            return <PokemonCard key={index} pokemon={myPokemonsListWithData[pokemon]}/>
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
