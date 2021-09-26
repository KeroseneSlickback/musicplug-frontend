import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import MainLayout from './Modules/Layout/MainLayout';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import SpotifyAuth from './Pages/SpotifyAuth';
import SpotifyTest from './Pages/SpotifyTest';

function App() {
	return (
		<div>
			<MainLayout>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/newpost">
						<NewPost />
					</Route>
					<Route path="/test">
						<SpotifyTest />
					</Route>
					<Route path="/spotifyauth">
						<SpotifyAuth />
					</Route>

					{/* <Router path="/genre/:id" children={<Genre />} /> */}
				</Switch>
			</MainLayout>
		</div>
	);
}

export default App;
