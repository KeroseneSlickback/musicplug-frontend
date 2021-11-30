import React from 'react';
import {
	CenterPageDiv,
	MainPageContainer,
	ContentContainer,
} from '../../Components/Containers';
import NavBar from './NavBar';
import MainSidebar from './MainSidebar';
import Footer from './Footer';

// This component wraps the overall app, styled-component styles changes the main sections of the app upon screen resolution change

function MainLayout(props) {
	return (
		<MainPageContainer>
			<NavBar />
			<CenterPageDiv>
				<MainSidebar />
				<ContentContainer>{props.children}</ContentContainer>
			</CenterPageDiv>
			<Footer themeToggle={props.themeToggle} theme={props.theme} />
		</MainPageContainer>
	);
}
export default MainLayout;
