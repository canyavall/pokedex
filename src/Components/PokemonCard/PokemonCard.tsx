import React from 'react';
import {Panel, Icon} from 'rsuite';
import {Pokemon} from "../../Store/Models/Pokedex/PokedexTypes";
import PokemonDetail from "../PokemonDetails/PokemonDetails";
import usePokemonCard from "./PokemonCardHook";

export interface PokemonCardProps {
    pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
    const {name} = pokemon
    const {
        imageUrl,
        showModal,
        setShowModal,
        showPicture,
        setShowPicture,
        finalId,
        onOpenDetail,
        pokemonDetails,
        isHover,
        setIsHover,
        isInMyPokemons
    } = usePokemonCard(pokemon)

    const containerFinalStyle = isHover ? {...styles.container, ...styles.isHover} : styles.container

    return (
        <div style={containerFinalStyle} onClick={onOpenDetail} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <div style={styles.contentWrapper}>
                    {showPicture &&
                    <img src={imageUrl} style={styles.image} alt={name} onError={() => setShowPicture(false)}/>}
                    {isInMyPokemons && <Icon icon={'star'} color={'blue'} size="lg"/>}
                    <h5>{'#' + finalId + ' - ' + name}</h5>
                </div>
            {showModal &&
            <PokemonDetail setShowModal={setShowModal} pokemon={pokemon} pokemonDetails={pokemonDetails}/>}
        </div>
    );
}

const styles = {
    container: {
        width: 205,
        height: 175,
        marginBottom: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius:5,
        border: '1px solid Gainsboro'
    } as React.CSSProperties,
    contentWrapper: {
        textAlign: 'center'
    } as React.CSSProperties,
    image: {
        width: 125,
        height: 125
    } as React.CSSProperties,
    isHover: {
        border: '1px solid Gainsboro',
        boxShadow: '5px 5px 5px Gainsboro'
    } as React.CSSProperties
}

export default PokemonCard;
