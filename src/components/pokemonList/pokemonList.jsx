import './pokemonList.css'
import { PokemonCard } from "../pokemonCard/pokemonCard";


const PokemonList=({pokemons})=>{

    return <div className="PokemonList">
        {pokemons.map((pokemon)=>{
            return <PokemonCard name={pokemon.name} key={pokemon.name}/>
        })}
    </div>;
}

PokemonList.defaultProps={
    pokemons: Array(10).fill("")
}

export {PokemonList}