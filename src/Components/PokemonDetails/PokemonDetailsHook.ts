export interface UsePokemonDetails {

}
export type stats= {
    speed: number;
    spdef: number;
    spat: number;
    def: number;
    at: number;
    hp: number;
}
const usePokemonDetails = ({pokemon, pokemonDetails}) => {
    const {name, id} = pokemon
    let finalId = id.toString().padStart(3, "000")
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${finalId}.png`

    const abilities = pokemonDetails && pokemonDetails.abilities && pokemonDetails.abilities.map((ability, index) => {
        const name = (index === 0) ? ability.ability.name : '/' + ability.ability.name
        return name
    })

    let stats = {
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

    const height = pokemonDetails && pokemonDetails.height && ((pokemonDetails.height / 10).toString() + ' m')
    const weight = pokemonDetails && pokemonDetails.weight && ((pokemonDetails.weight / 10).toString() + ' kg')

    return {
        id,
        name,
        finalId,
        imageUrl,

        abilities,
        height,
        weight,
        stats
    }
}

export default usePokemonDetails