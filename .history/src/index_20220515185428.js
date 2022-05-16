import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js'; // <-- App / begin React
import App from './app.js'; // <-- app / begin Electron

window.onload = () => {
    ReactDOM.render(<App />, document.getElementById('app'));
};