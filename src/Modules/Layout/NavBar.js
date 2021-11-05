import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Utilities/AuthContext';

import { NavHeader, NavButtonDiv } from '../../Components/NavBarComponents';
import {
	MediumStyledButton,
	MediumStyledReactDomLink,
} from '../../Components/Buttons';
import { StyledLogo } from '../../Utilities/Images/StyledSVG/LogoSVGComponent';

import LoginModal from '../../Modules/Modals/LoginModal';
import LogoutModal from '../../Modules/Modals/LogoutModal';
import { Backdrop } from '../../Components/Backdrop';

function MainNavBar() {
	const { loggedIn } = useAuth();
	const [viewLogin, setViewLogin] = useState(false);
	const [viewLogout, setViewLogout] = useState(false);

	function toggleLogin() {
		setViewLogin(prev => !prev);
	}

	function toggleLogout() {
		setViewLogout(prev => !prev);
	}

	function closeModal() {
		setViewLogin(false);
		setViewLogout(false);
	}

	return (
		<NavHeader>
			<Link to="/">
				<StyledLogo firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
			</Link>
			{loggedIn ? (
				<NavButtonDiv>
					<MediumStyledButton onClick={() => toggleLogout()}>
						Logout
					</MediumStyledButton>
				</NavButtonDiv>
			) : (
				<NavButtonDiv>
					<MediumStyledReactDomLink primary to="/register">
						Register
					</MediumStyledReactDomLink>
					<MediumStyledButton onClick={() => toggleLogin()}>
						Login
					</MediumStyledButton>
				</NavButtonDiv>
			)}

			{viewLogin ? <LoginModal closeModal={closeModal} /> : null}
			{viewLogout ? <LogoutModal closeModal={closeModal} /> : null}
			{viewLogin || viewLogout ? <Backdrop onClick={closeModal} /> : null}
		</NavHeader>
	);
}

export default MainNavBar;
