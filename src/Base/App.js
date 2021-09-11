import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Styles/App.css';

// Components
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';

function App() {
	return (
		<div>
			<MainLayout>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					{/* <Router path="/genre/:id" children={<Genre />} /> */}
				</Switch>
			</MainLayout>
		</div>
	);
}

export default App;
