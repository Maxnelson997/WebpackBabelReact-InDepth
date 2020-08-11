console.log("webpack bby");

import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import { whatFileDoesThisBreakIn } from './testBreak';

whatFileDoesThisBreakIn('hi', 'there');

const title = "I do the codes.";

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
)

module.hot.accept();