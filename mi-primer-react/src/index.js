import React from 'react';
import ReactDOM from 'react-dom';

// ES6
import App from './App';

// Javascript (Node)
// const App = require('./App');

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
