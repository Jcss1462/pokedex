import { StarOutlined } from '@ant-design/icons';
import {Card} from 'antd'
import Meta from 'antd/es/card/Meta';

const PokemonCard=({name,image, types})=>{

    const typeString=types.map(elem=>elem.type.name).join(", ");

    return <Card
        title={name}
        cover={<img src ={image} alt={name}/>}
        extra={<StarOutlined/>}
    >
        <Meta description= {typeString}/>
    </Card>;
}

export {PokemonCard}