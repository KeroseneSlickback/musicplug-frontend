import React from 'react';
import { CenterPageDiv } from '../../Components/Containers';
import NavBar from './NavBar';
import MainSidebar from './MainSidebar';
import Footer from './Footer';

function MainLayout(props) {
	return (
		<>
			<NavBar />
			<CenterPageDiv>
				<MainSidebar />
				<main>{props.children}</main>
			</CenterPageDiv>
			<Footer />
		</>
	);
}
export default MainLayout;
