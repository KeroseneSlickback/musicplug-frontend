import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MainLayout from './Modules/Layout/MainLayout';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import Register from './Pages/Register';
import Redirect from './Pages/Redirect';
import Genre from './Pages/Genre';
import Post from './Pages/Post';

import { DarkTheme, LightTheme, GlobalStyles } from './Styles/Variables';

function App() {
	const [theme, setTheme] = useState(true);

	const themeToggle = () => {
		setTheme(prev => !prev);
	};
	return (
		<ThemeProvider theme={theme ? DarkTheme : LightTheme}>
			<GlobalStyles />
			<MainLayout themeToggle={themeToggle}>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/newpost">
						<NewPost />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/redirect">
						<Redirect />
					</Route>
					<Route path="/genre/:genre">
						<Genre />
					</Route>
					<Route path="/post/:id">
						<Post />
					</Route>
				</Switch>
			</MainLayout>
		</ThemeProvider>
	);
}

export default App;
