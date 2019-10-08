import {Details} from "../Store/Models/Pokedex/PokedexTypes";
import {memoize} from 'lodash'

export type Stats = {
    speed: number;
    spdef: number;
    spat: number;
    def: number;
    at: number;
    hp: number;
}

/**
 * Extract the abilities data from the parsed data
 * @param pokemonDetails
 */
export const extractAbilitiesFromData = memoize((pokemonDetails: Details): string[] => {
    return pokemonDetails && pokemonDetails.abilities && pokemonDetails.abilities.map((ability, index) => {
        const name = (index === 0) ? ability.ability.name : '/' + ability.ability.name
        return name
    })
})

/**
 * Extract the stats data from the parsed data
 * @param pokemonDetails
 */
export const extractStatsFromData = memoize((pokemonDetails: Details) => {
    let stats: Stats = {
        speed: 0,
        spdef: 0,
        spat: 0,
        def: 0,
        at: 0,
        hp: 0
    }

    pokemonDetails && pokemonDetails.stats && pokemonDetails.stats.forEach((stat) => {
        if (stat.stat.name === 'speed') stats.speed = stat.base_stat
        if (stat.stat.name === 'special-defense') stats.spdef = stat.base_stat
        if (stat.stat.name === 'special-attack') stats.spat = stat.base_stat
        if (stat.stat.name === 'defense') stats.def = stat.base_stat
        if (stat.stat.name === 'attack') stats.at = stat.base_stat
        if (stat.stat.name === 'hp') stats.hp = stat.base_stat
    })

    return stats
})

/**
 * Extract the types data from the parsed data
 * @param pokemonDetails
 */
export const extractTypesFromData = memoize((pokemonDetails: Details) => {
    return pokemonDetails && pokemonDetails.types && pokemonDetails.types.map((type, index) => {
        const name = (index === 0) ? type.type.name : '/' + type.type.name
        return name
    })
})