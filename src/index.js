import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './Utilities/AuthContext';

// Basic index.js with context wrapping and react-router-dom wrapping

ReactDOM.render(
	<AuthProvider>
		<Router>
			<App />
		</Router>
	</AuthProvider>,
	document.getElementById('root')
);
