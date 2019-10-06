import React, {useState} from 'react';
import {Nav} from 'rsuite';
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
    const [activeKey, setActiveKey] = useState('pokedex')

    return (
            <Nav appearance="subtle" activeKey={activeKey} onSelect={setActiveKey}>
                <Nav.Item eventKey="pokedex"> <Link to={'/'}>Pokedex</Link> </Nav.Item>
                <Nav.Item eventKey="mypokemons"><Link to={'mypokemon'}>My Pokemons</Link></Nav.Item>
            </Nav>
    );
}

export default Header