// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.


// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const type of ['chrome', 'node', 'electron']) {
//     replaceText(`${type}-version`, process.versions[type])
//   }
// })

const React = require("react");
const ReactDOM = require("react-dom");

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// //import App from './App.js'; // <-- App / begin React
// // import App from './app.js'; // <-- app / begin Electron

window.onload = () => {
    ReactDOM.render(document.getElementById('app'));
};

