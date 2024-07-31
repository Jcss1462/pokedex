
import './App.css';
import logo from '../assets/logo.svg'
import { Col } from 'antd'
import { useEffect} from 'react';
import { Searcher } from '../components/searcher/searcher.jsx';
import { PokemonList } from '../components/pokemonList/pokemonList.jsx';
import { getPokemon } from '../api/index.js';

//rdux import
import { connect } from 'react-redux';
import { setPokemons as  setPokemonsActions} from '../actions/index.js';


function App({pokemons,setPokemons}) {
  
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes=await getPokemon();
      setPokemons(pokemonsRes);
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
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

//recibe el estado y retorna un objet cuyas propiedades seran enviadas al componente que se conecta a redux
const mapStateToProps=(state)=>({
  pokemons: state.pokemons
});


//recibe un dispatcher y retorna un objeto con los actions creators establecidos previamente
const mapDispatchToProps=(dispatch)=>({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
