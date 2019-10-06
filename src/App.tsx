import React from 'react';
import AppRouter from './Routes/AppRouter'
import 'rsuite/dist/styles/rsuite-default.css';

const App: React.FC = () => {
    return (
        <div style={styles.container}>
            <AppRouter/>
        </div>
    );
}

const styles = {
    container: {
        width: '50%',
        margin: '0 auto'
    }
}
export default App;
