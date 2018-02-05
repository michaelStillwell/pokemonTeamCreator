// React Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component Imports
import App from './Components/App';

class Index extends Component {
    render() {
        return <App />
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);