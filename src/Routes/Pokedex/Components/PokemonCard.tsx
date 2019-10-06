import React, {useState} from 'react';
import {Panel} from 'rsuite';
import {Pokemon} from "../../../Store/Models/Pokedex/PokedexTypes";
import PokemonDetail from "./PokemonDetails";

export interface PokemonCardProps {
    pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
    const {name, id} = pokemon
    const [showPicture, setShowPicture] = useState(true)
    const [showModal, setShowModal] = useState(false)

    let finalId = id.toString().padStart(3, "000")
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${finalId}.png`

    return (
        <div style={styles.container} onClick={() => {
            console.log("INDACLICK")
            setShowModal(true)
        }}>
            <Panel bordered>
                <div style={styles.contentWrapper}>
                    {showPicture &&
                    <img src={imageUrl} style={styles.image} alt={name} onError={() => setShowPicture(false)}/>}
                    <h5>{'#' + finalId + ' - ' + name}</h5>
                </div>
            </Panel>
            {showModal && <PokemonDetail setShowModal={() => setShowModal(false)} pokemon={pokemon}/>}
        </div>
    );
}

const styles = {
    container: {
        width: 210,
        height: 175,
        marginBottom: 10,
        marginRight: 10,
        marginTop: 10
    } as React.CSSProperties,
    contentWrapper: {
        textAlign: 'center'
    } as React.CSSProperties,
    image: {
        width: 125,
        height: 125
    } as React.CSSProperties
}

export default PokemonCard;
