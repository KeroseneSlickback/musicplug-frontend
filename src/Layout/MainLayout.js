import React from 'react';
import MainNavBar from './MainNavBar';
import MainSidebar from './MainSidebar';

import './Styles/MainLayout.css';

function MainLayout(props) {
	return (
		<div>
			<MainNavBar />
			<div className="centerPageDiv">
				<MainSidebar />
				<main>{props.children}</main>
			</div>
		</div>
	);
}
export default MainLayout;
