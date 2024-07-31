
import './App.css';
import logo from '../assets/logo.svg'
import { Col } from 'antd'
import { useEffect, useState } from 'react';
import { Searcher } from '../components/searcher/searcher.jsx';
import { PokemonList } from '../components/pokemonList/pokemonList.jsx';
import { getPokemon } from '../api/index.js';


function App() {
  
  const [pokemons, setPokemons]=useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes=await getPokemon();
      setPokemons(pokemonsRes);
    }

    fetchPokemons();
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedex"></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
