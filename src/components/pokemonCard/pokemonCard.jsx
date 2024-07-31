import { StarOutlined } from '@ant-design/icons';
import {Card} from 'antd'
import Meta from 'antd/es/card/Meta';

const PokemonCard=()=>{
    return <Card
        title="Dito"
        cover={<img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Dito"/>}
        extra={<StarOutlined/>}
    >
        <Meta description= "fire, magic"/>
    </Card>;
}

export {PokemonCard}