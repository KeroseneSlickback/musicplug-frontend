import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './Utilities/AuthContext';

ReactDOM.render(
	<AuthProvider>
		<Router>
			<App />
		</Router>
	</AuthProvider>,
	document.getElementById('root')
);
