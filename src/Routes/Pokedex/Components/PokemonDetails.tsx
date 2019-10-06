import React from 'react';
import {Modal} from 'rsuite';
import {Pokemon} from "../../../Store/Models/Pokedex/PokedexTypes";

export interface PokemonCardProps {
    pokemon: Pokemon,
    setShowModal: any
}

const PokemonDetail: React.FC<PokemonCardProps> = ({pokemon, setShowModal}) => {
    const {name, id} = pokemon
    let finalId = id.toString().padStart(3, "000")
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${finalId}.png`

    return (
        <Modal show={true} onHide={(e) => {
            setShowModal()
            e.stopPropagation()
        }}>
            <Modal.Header>
                <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={imageUrl}/>
            </Modal.Body>
        </Modal>
    );
}

const styles = {}

export default PokemonDetail;
