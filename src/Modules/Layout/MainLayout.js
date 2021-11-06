import React from 'react';
import { CenterPageDiv, MainPageContainer } from '../../Components/Containers';
import NavBar from './NavBar';
import MainSidebar from './MainSidebar';
import Footer from './Footer';

function MainLayout(props) {
	return (
		<MainPageContainer>
			<NavBar />
			<CenterPageDiv>
				<MainSidebar />
				<main>{props.children}</main>
			</CenterPageDiv>
			<Footer />
		</MainPageContainer>
	);
}
export default MainLayout;
