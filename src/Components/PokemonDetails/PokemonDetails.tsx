import React from 'react';
import {Button, Col, Modal, Panel, Row, Progress} from 'rsuite';
import {Details, Pokemon} from "../../Store/Models/Pokedex/PokedexTypes";
import usePokemonDetails from "./PokemonDetailsHook";
const { Line } = Progress;

export interface PokemonCardProps {
    pokemon: Pokemon,
    setShowModal: any,
    pokemonDetails: Details
}

const PokemonDetail: React.FC<PokemonCardProps> = (props) => {
    const {
        name,
        imageUrl,
        finalId,
        abilities,
        height,
        weight,
        stats,
        addPokemon,
        removePokemon,
        closeModal,
        isInMyPokemons
    } = usePokemonDetails(props)

    return (
        <Modal show={true}>
            <Modal.Body>
                <h2>{name}</h2>
                <Row style={styles.firstRow}>
                    <Col md={12} style={styles.logoContainer}>
                        <img src={imageUrl} alt={name}/>
                    </Col>
                    <Col md={12} style={styles.dataContainer}>
                        <Panel bordered>
                            <p>National N°: {finalId}</p>
                            <p>Type: </p>
                            <p>Height: {height}</p>
                            <p>Weight: {weight}</p>
                            <p>Abilities: {abilities}</p>
                        </Panel>
                    </Col>
                </Row>
                <div>
                    <Panel bordered>
                        <Row>
                            <Col md={3}>HP: </Col>
                            <Col md={19}><Line percent={30} strokeColor="#ffc107" /> </Col>
                            <Col md={2}>{stats.hp}</Col>
                        </Row>
                        <Row>
                            <Col md={3}>Attack: </Col>
                            <Col md={19}><Line percent={30} strokeColor="#ffc107" /></Col>
                            <Col md={2}>{stats.attack}</Col>
                        </Row>
                        <p>Defense: {stats.def}</p>
                        <p>Sp. Atk: {stats.spat}</p>
                        <p>Sp. Def: {stats.spdef}</p>
                        <p>Speed: {stats.speed}</p>
                    </Panel>
                </div>
            </Modal.Body>
            <Modal.Footer>
                {!isInMyPokemons && <Button onClick={addPokemon} appearance="primary">
                    Add to My Pokemons
                </Button>}
                {isInMyPokemons && <Button onClick={removePokemon} appearance="primary" color="red">
                    Remove from My Pokemons
                </Button>}
                <Button onClick={closeModal} appearance="subtle">
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    );
}

const styles = {
    firstRow: {
        width: '100%'
    } as React.CSSProperties,
    logoContainer: {
        width: "50%"
    } as React.CSSProperties,
    dataContainer: {
        width: "50%"
    } as React.CSSProperties
}

export default PokemonDetail;
