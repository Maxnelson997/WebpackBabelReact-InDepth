import App from './App';
import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

console.log('webpack bby');
console.log(`env: ${process.env.NODE_ENV}`);

const title = "Now supports SCSS.";

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
)

module.hot.accept();