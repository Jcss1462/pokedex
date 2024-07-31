
import './App.css';
import { Col } from 'antd'
import { Searcher } from '../components/searcher/searcher.jsx';
import { PokemonList } from '../components/pokemonList/pokemonList.jsx';


function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList/>
    </div>
  );
}

export default App;
