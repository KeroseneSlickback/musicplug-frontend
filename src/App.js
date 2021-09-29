import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAuth } from './Utilities/AuthContext';

// Components
import MainLayout from './Modules/Layout/MainLayout';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import Register from './Pages/Register';
import SpotifyRedirect from './Pages/SpotifyRedirect';

function App() {
	const { loggedIn } = useAuth();
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
				<Route>
					<SpotifyRedirect />
				</Route>
				{/* <Router path="/genre/:id" children={<Genre />} /> */}
			</Switch>
		</MainLayout>
	);
}

export default App;
