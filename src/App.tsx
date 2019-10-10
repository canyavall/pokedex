import React, {useEffect} from 'react';
import AppRouter from './Routes/AppRouter'
import 'rsuite/dist/styles/rsuite-default.css';
import {Provider} from "react-redux";
import store from "./Store/store";
import {getPersistor} from '@rematch/persist'
import {PersistGate} from 'redux-persist/lib/integration/react'

const App: React.FC = () => {
    useEffect(() => {
        // Fetch data
        store.dispatch.pokedex.fetchPokemons()
    }, [])

    return (
        <div style={styles.container}>
            <PersistGate persistor={getPersistor()}>

                <Provider store={store}>
                    <AppRouter/>
                </Provider>
            </PersistGate>
        </div>
    );
}

const styles = {
    container: {
        width: '72%',
        margin: '0 auto'
    } as React.CSSProperties
}
export default App;
