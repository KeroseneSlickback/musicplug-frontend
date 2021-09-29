import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import theme from './Styles/Variables';
import App from './App';
import { AuthProvider } from './Utilities/AuthContext';

import { GlobalStyle } from './Components/Global';

ReactDOM.render(
	<AuthProvider>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</AuthProvider>,
	document.getElementById('root')
);
