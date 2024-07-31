
import './App.css';
import { Col } from 'antd'
import  logo  from '../assets/logo.svg'
import { Searcher } from '../components/searcher/searcher.jsx';
import { PokemonList } from '../components/pokemonList/pokemonList.jsx';


function App() {
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedex"></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList/>
    </div>
  );
}

export default App;
