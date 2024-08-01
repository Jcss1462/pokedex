import './pokemonList.css'
import { PokemonCard } from "../pokemonCard/pokemonCard";


const PokemonList=({pokemons})=>{

    return <div className="PokemonList">
        {pokemons.map((pokemon)=>{
            return <PokemonCard name={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types} key={pokemon.name} id={pokemon.id} favorite={pokemon.favorite}/>
        })}
    </div>;
}

PokemonList.defaultProps={
    pokemons: Array(10).fill("")
}

export {PokemonList}