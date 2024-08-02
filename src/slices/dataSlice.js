import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState={
    pokemons: []
}

export const fetchPokemonWithDetails= createAsyncThunk(
    "data/fetch",
    async (_,{dispatch})=>{
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemon();
        const pokemonDetailed= await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)));
        dispatch(setPokemons(pokemonDetailed));
        dispatch(setLoading(false));
    }
);

export const dataSliece = createSlice({
    name: "data",
    initialState,
    reducers: {
        setPokemons: (state, action)=>{
            state.pokemons=action.payload
        },
        setFavorite:(state, action)=>{
           
            const currentPokeemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId
            });

            if (currentPokeemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokeemonIndex].favorite;
                state.pokemons[currentPokeemonIndex].favorite=!isFavorite;
            }
        }
    }
});

export const {setPokemons,setFavorite}=dataSliece.actions;

export default dataSliece.reducer;