import React from 'react';
import MainNavBar from './MainNavBar';

function MainLayout(props) {
	return (
		<div>
			<MainNavBar />
			<main>{props.children}</main>
		</div>
	);
}
export default MainLayout;
