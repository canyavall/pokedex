import React from 'react';
import {Col, Input, Loader, Pagination, Panel, Row} from 'rsuite';
import usePokedex from "./PokedexHook";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import store from "../../Store/store";

const Pokedex: React.FC = () => {
    const {pokemons, pokedexListCurrentPage, pokedexListElementsToShow, maxIndex, numberOfPages, search, setSearch} = usePokedex()

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
            <Row style={{paddingTop: 10}}>
                <Col md={20}>
                    <Panel style={styles.panelStyle} bordered>
                        <div style={styles.gridContainer}>
                            {pokemons.length === 0 && (!search || search.length === 0) && <Loader size="lg"/>}
                            {pokemons.length > 0 && Object.keys(pokemons).map((pokemon, index) => {
                                if (index >= maxIndex - pokedexListElementsToShow && index < maxIndex) {
                                    return <PokemonCard key={index} pokemon={pokemons[pokemon]}/>
                                }
                                return null
                            })}
                            {search && search.length > 0 && <>
                                <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/201.png'}
                                     alt={'unown'}/>
                                <h3>Pokemon not found</h3>
                            </>
                            }
                        </div>
                    </Panel>
                    <Pagination {...paginationProps}/>
                </Col>
                <Col md={4}>
                    <Input placeholder="Search" onChange={(value) => setSearch(value)}/>
                </Col>
            </Row>
        </>
    );
}

const styles = {
    gridContainer: {
        display: 'flex',
        width: "100%",
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    } as React.CSSProperties,
    panelStyle: {
        paddingLeft: 10
    } as React.CSSProperties,
    pagination: {
        display: 'flex',
        justifyContent: 'flex-end'
    } as React.CSSProperties,
    orderBy: {}
}

export default Pokedex;
