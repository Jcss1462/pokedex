import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/type"

const initialState = {
    pokemons: [],
    loading: false
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: action.payload };
        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons];
            const currentPokeemonIndex=newPokemonList.findIndex((pokemon)=>{
                return pokemon.id=== action.payload.pokemonId
            });
            //si no encuentra el index retorno el estado
            if(currentPokeemonIndex <0){
                return state;
            }

            newPokemonList[currentPokeemonIndex].favorite = !newPokemonList[currentPokeemonIndex].favorite
            return { ...state, pokemons: newPokemonList };
            
        case SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}