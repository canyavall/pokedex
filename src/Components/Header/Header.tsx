import React, {useState} from 'react';
import {Nav} from 'rsuite';
import {Link} from "react-router-dom";

const NavLink = props => <Nav.Item componentClass={Link} {...props} />;

export const Header: React.FC = () => {
    return (
            <Nav appearance="subtle">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mypokemon">My Pokemons</NavLink>
            </Nav>
    );
}

export default Header