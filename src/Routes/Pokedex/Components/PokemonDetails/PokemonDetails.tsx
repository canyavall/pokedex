import React from 'react';
import {Button, Modal, Panel} from 'rsuite';
import {Details, Pokemon} from "../../../../Store/Models/Pokedex/PokedexTypes";
import usePokemonDetails from "./PokemonDetailsHook";

export interface PokemonCardProps {
    pokemon: Pokemon,
    setShowModal: any,
    pokemonDetails: Details
}

const PokemonDetail: React.FC<PokemonCardProps> = (props) => {
    const {setShowModal} = props
    const {name, imageUrl, finalId, abilities, height, weight, stats} = usePokemonDetails(props)

    return (
        <Modal show={true}>
            <Modal.Body>
                <h2>{name}</h2>
                <div style={styles.firstRow}>
                    <div style={styles.logoContainer}>
                        <img src={imageUrl}/>
                    </div>
                    <div style={styles.dataContainer}>
                        <Panel bordered>
                            <p>National N°: {finalId}</p>
                            <p>Type: </p>
                            <p>Height: {height}</p>
                            <p>Weight: {weight}</p>
                            <p>Abilities: {abilities}</p>
                        </Panel>
                    </div>
                </div>
                <div>
                    <Panel bordered>
                        <p>HP: {stats.hp}</p>
                        <p>Attack: {stats.hp}</p>
                        <p>Defense: {stats.def}</p>
                        <p>Sp. Atk: {stats.spat}</p>
                        <p>Sp. Def: {stats.spdef}</p>
                        <p>Speed: {stats.speed}</p>
                    </Panel>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e) => {
                    setShowModal()
                    e && e.stopPropagation()
                }} appearance="subtle">
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
