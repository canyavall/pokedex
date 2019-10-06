import React from 'react';
import {Dropdown, Loader, Pagination, Panel, Row, Col, Input} from 'rsuite';
import usePokedex from "./PokedexHook";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
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
            <Row style={{paddingTop: 10}}>
                <Col md={20}>
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
                </Col>
                <Col md={4}>
                    <Input style={{ width: '100%' }} placeholder="Search" />
                    <Dropdown title="Order list by" trigger="hover" placement="rightStart">
                        <Dropdown.Item>Number Asc</Dropdown.Item>
                        <Dropdown.Item>Number Desc</Dropdown.Item>
                        <Dropdown.Item>Name Asc</Dropdown.Item>
                        <Dropdown.Item>Name Desc</Dropdown.Item>
                    </Dropdown>
                    <Dropdown title="Show list as" trigger="hover" placement="rightStart">
                        <Dropdown.Item>Grid</Dropdown.Item>
                        <Dropdown.Item>List</Dropdown.Item>
                    </Dropdown>
                    <Dropdown title="Filter list by type" trigger="hover" placement="rightStart">
                        <Dropdown.Item>Water</Dropdown.Item>
                        <Dropdown.Item>Plant</Dropdown.Item>
                    </Dropdown>
                </Col>
            </Row>
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
        paddingLeft: 20
    } as React.CSSProperties,
    pagination: {
        display: 'flex',
        justifyContent: 'flex-end'
    } as React.CSSProperties,
    orderBy: {}
}

export default Pokedex;
