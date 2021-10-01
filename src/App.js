import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import MainLayout from './Modules/Layout/MainLayout';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import Register from './Pages/Register';
import Redirect from './Pages/Redirect';

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
				{/* <Router path="/genre/:id" children={<Genre />} /> */}
			</Switch>
		</MainLayout>
	);
}

export default App;
