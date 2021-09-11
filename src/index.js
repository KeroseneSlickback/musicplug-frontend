import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Themes/index.css';
import App from './Base/App';
// context

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
