import React from 'react';
import MainNavBar from './MainNavBar';

function MainLayout(props) {
	return (
		<div>
			<MainNavBar />
			<div></div>
			<main>{props.children}</main>
		</div>
	);
}
export default MainLayout;
