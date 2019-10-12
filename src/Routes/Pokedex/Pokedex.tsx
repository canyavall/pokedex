import React from 'react';
import {Col, Input, Pagination, Panel, Row} from 'rsuite';
import usePokedex from "./PokedexHook";
import store from "../../Store/store";
import PokedexGrid from "../../Components/PokedexGrid/PokedexGrid";
import Loader from "rsuite/es/Loader/Loader";

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
                            {(pokemons.length === 0) && <Loader size="lg" content="Large"/>}
                            <PokedexGrid pokemons={pokemons}
                                         elementsToShow={pokedexListElementsToShow}
                                         maxIndex={maxIndex}/>
                            {search && search.length > 0 && pokemons.length === 0 && <>
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
