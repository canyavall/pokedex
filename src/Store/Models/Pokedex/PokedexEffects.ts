import store from "../../store";

const PokedexEffects = (dispatch) => ({

    /**
     * Fetch all pokemons
     */
    async fetchPokemons() {
        try {
            // Let's check if we have the data, and, if it is the case, don't reload it
            if (store.getState().pokedex.pokemons.length === 0) {
                const url = 'https://pokeapi.co/api/v2/pokemon/?limit=9999'
                await fetch(url)
                    .then((response) => response.json())
                    .then((data) => dispatch.pokedex.setAllPokemons(data))
            }
        } catch (e) {
            console.error('Error fetching pokemons')
        }
    },

    /**
     * fetch one pokemon by id
     */
    async fetchPokemon(id: number) {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            await fetch(url)
                .then((response) => response.json())
                .then((data) => dispatch.pokedex.setPokemon(data))
        } catch (e) {
            console.error('Error fetching Pokenon: ', id)
        }
    }
})

export default PokedexEffects
