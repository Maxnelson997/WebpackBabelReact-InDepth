import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
// import { whatFileDoesThisBreakIn } from './testBreak';

// whatFileDoesThisBreakIn('hi', 'there');

console.log('webpack bby');
console.log(`env: ${process.env.NODE_ENV}`);

const title = "I do the codes. hmmm";

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
)

module.hot.accept();