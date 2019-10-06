import React from 'react';
import {Panel} from 'rsuite';
import {Pokemon} from "../../../Store/Models/Pokedex/PokedexTypes";

export interface PokemonCardProps {
    pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
    const {pokemon} = props
    let finalId = pokemon.id.toString().padStart(3,"000")
    const imageurl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${finalId}.png`

    return (
        <div style={styles.container}>
            <Panel bordered>
                <img src={imageurl}/>
            </Panel>
        </div>
    );
}

const styles = {
    container: {
        width: 200,
        height: 150
    }
}

export default PokemonCard;
