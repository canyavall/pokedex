import React, {useState} from 'react';
import {Nav} from 'rsuite';

export const Header: React.FC = () => {
    const [activeKey, setActiveKey] = useState('pokedex')

    return (
            <Nav appearance="subtle" activeKey={activeKey} onSelect={setActiveKey}>
                <Nav.Item eventKey="pokedex"> Pokedex </Nav.Item>
                <Nav.Item eventKey="mypokemons">My Pokemons</Nav.Item>
            </Nav>
    );
}

export default Header