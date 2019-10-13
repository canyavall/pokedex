import React from 'react';
import pokeballColor from '../../img/pb-icon-color.png';
import pokeballBn from '../../img/pb-icon-bw.png';
import {Pokemon} from "../../Store/Models/Pokedex/PokedexTypes";
import PokemonDetail from "../PokemonDetails/PokemonDetails";
import usePokemonCard from "./PokemonCardHook";
import {Row, Col} from 'rsuite'

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
        isInMyPokemons,
        addPokemon,
        removePokemon
    } = usePokemonCard(pokemon)

    const containerFinalStyle = isHover ? {...styles.container, ...styles.isHover} : styles.container

    let isInMyPokemonsIcon = pokeballBn
    let onClickIcon = addPokemon
    if (isInMyPokemons){
        isInMyPokemonsIcon = pokeballColor
        onClickIcon = removePokemon
    }

    return (
        <div style={containerFinalStyle}
             onClick={onOpenDetail}
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}
             onMouseUp={() => setIsHover(false)}>
            <div style={styles.contentWrapper}>
                <Row>
                    <Col md={19}>
                        {showPicture &&
                        <img src={imageUrl} style={styles.image} alt={name} onError={() => setShowPicture(false)}/>}
                    </Col>
                    <Col md={5} style={styles.pokeballIconWrapper}>
                        <img src={isInMyPokemonsIcon}
                             style={styles.pokeballIcon}
                             onClick={onClickIcon}/>
                    </Col>
                </Row>

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
        borderRadius: 5,
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
    } as React.CSSProperties,
    pokeballIconWrapper: {
        top: 10
    },
    pokeballIcon: {
        width: 20,
        height: 20
    }
}
    export default PokemonCard;
