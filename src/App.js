import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import MainLayout from './Modules/Layout/MainLayout';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import Register from './Pages/Register';
import Redirect from './Pages/Redirect';
import Genre from './Pages/Genre';
import Post from './Pages/Post';

function App() {
	return (
		<MainLayout>
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
	);
}

export default App;
