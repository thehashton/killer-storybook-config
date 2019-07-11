import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { InstallationSucess } from './components/InstallationSuccess/InstallationSucess';

const App: React.FunctionComponent = () => {
    return (
        <>
            <InstallationSucess />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))