import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Header } from './components/Header/Header';

const App: React.FunctionComponent = () => {
    return (
        <>
            <Header />
            <div>Hello Killer Storybook Config</div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))