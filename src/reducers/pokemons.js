import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/type"

const initialState = fromJS({
    pokemons: [],
    loading: false
})

export const pokemonsReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case SET_POKEMONS:
           
            return state.setIn(["pokemons"],fromJS(action.payload));
        
            case SET_FAVORITE:
         
            const currentPokeemonIndex= state.get("pokemons").findIndex((pokemon)=>{
                return pokemon.get("id")=== action.payload.pokemonId
            });

            //si no encuentra el index retorno el estado
            if(currentPokeemonIndex <0){
                return state;
            }
   
            const isFavorite= state.getIn(["pokemons", currentPokeemonIndex, "favorite"]);

            return state.setIn(["pokemons", currentPokeemonIndex, "favorite"],!isFavorite);

        case SET_LOADING:

            return state.setIn(["loading"],action.payload);
            
        default:
            return state;
    }
}