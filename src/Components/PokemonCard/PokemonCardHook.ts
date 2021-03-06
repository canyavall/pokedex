import {SyntheticEvent, useState} from "react";
import store from "../../Store/store";
import select from "../../Store/selectors";
import {useSelector} from 'react-redux'
import {Details, Pokemon} from "../../Store/Models/Pokedex/PokedexTypes";
import {getPokemonImage, idToString} from "../../Utils/utils";

export interface UsePokemonCard {
    isHover: boolean;
    setIsHover: Function;

    showPicture: boolean;
    setShowPicture: Function;

    showModal: boolean;
    setShowModal: Function;

    imageUrl: string;
    finalId: string;

    onOpenDetail: (event) => void;

    pokemonDetails: Details;
    isInMyPokemons: boolean;

    addPokemon: (event: SyntheticEvent<Element, Event>) => void;
    removePokemon: (event: SyntheticEvent<Element, Event>) => void;
}

const usePokemonCard = (pokemon: Pokemon): UsePokemonCard => {
    const {id} = pokemon
    const [isHover, setIsHover] = useState(false)

    const [showPicture, setShowPicture] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const pokemons = useSelector(select.pokedex.getPokemons)
    const isInMyPokemons = useSelector((state) => select.mypokemon.isPokemonInMyPokemons(state)(id))
    const pokemonDetails = pokemons && pokemons[id] && pokemons[id].details

    let finalId = idToString(id)
    const imageUrl = getPokemonImage(id)

    const onOpenDetail = async () => {
        !pokemonDetails && await store.dispatch.pokedex.fetchPokemon(id)
        setShowModal(true)
    }

    const addPokemon = (e) => {
        e.stopPropagation()
        store.dispatch.mypokemon.addPokemon(id)
    }

    const removePokemon = (e) => {
        e.stopPropagation()
        store.dispatch.mypokemon.removePokemon(id)
    }

    return {
        isHover,
        setIsHover,

        showPicture,
        setShowPicture,

        showModal,
        setShowModal,

        imageUrl,
        finalId,

        onOpenDetail,

        pokemonDetails,
        isInMyPokemons,

        addPokemon,
        removePokemon
    }
}

export default usePokemonCard