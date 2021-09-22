import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import theme from './Styles/Variables';
import App from './App';

import { GlobalStyle } from './Components/Global';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Router>
			<App />
		</Router>
	</ThemeProvider>,
	document.getElementById('root')
);
