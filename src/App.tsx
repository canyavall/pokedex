import React from 'react';
import AppRouter from './Routes/AppRouter'
import 'rsuite/dist/styles/rsuite-default.css';
import {Provider} from "react-redux";
import store from "./Store/store";

const App: React.FC = () => {
    return (
        <div style={styles.container}>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
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
