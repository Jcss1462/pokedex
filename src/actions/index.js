import { SET_POKEMONS } from "./type";
import { getPokemonDetails } from "../api";

export const setPokemons = (payload)=>({
    type: SET_POKEMONS,
    payload
});

export const getPokemonsWithDetails = (pokemons=[]) => async (dispatch)=>{
    //Promise.all llanza un conjunto de peticiones al mismo tiempo y se resolvera cuando todas esten resueltas
    const pokemonDetailed= await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)));
    dispatch(setPokemons(pokemonDetailed));
};