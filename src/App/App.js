
import './App.css';
import logo from '../assets/logo.svg'
import { Col, Spin } from 'antd'
import { useEffect } from 'react';
import { Searcher } from '../components/searcher/searcher.jsx';
import { PokemonList } from '../components/pokemonList/pokemonList.jsx';
import { getPokemon } from '../api/index.js';

//rdux import
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsWithDetails, setLoading } from '../actions/index.js'


function App() {

  const pokemons = useSelector(state => state.get("pokemons")).toJS();
  const loading = useSelector(state => state.get("loading"));
  const dispatch = useDispatch();

  useEffect(() => {
   
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
    }

    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedex"></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={pokemons} />}

    </div>
  );
}

export default App;
