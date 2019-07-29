import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

import Article from './components/Article';

ReactDOM.render(<Article />, document.getElementById('root'));

serviceWorker.unregister();
