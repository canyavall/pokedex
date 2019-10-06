import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Pokemon from './Pokemon/Pokemon'
import Pokedex from './Pokedex/Pokedex'
import MyPokemon from './MyPokemon/MyPokemon'
import Header from "../Components/Header/Header";

/**
 * In this function we can set up all the screens needed in the app and used by
 * react router for web build
 *
 * Please, refer to the react navigation documentation to set up it correctly
 *
 * @returns {*}
 */
const AppRouter: React.FC = () => {
    return <Router>
        <Header />
            <Route path="/" exact component={Pokedex}/>
            <Route path="/pokemon/:id" exact component={Pokemon}/>
            <Route path="/mypokemon" exact component={MyPokemon}/>
    </Router>
}

export default AppRouter