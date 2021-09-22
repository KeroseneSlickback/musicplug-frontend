import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavHeader, NavButtonDiv } from '../../Components/NavBarComponents';
import { MediumStyledButton } from '../../Components/Buttons';
import { StyledLogo } from '../../Utilities/Images/StyledSVG/LogoSVGComponent';

import LoginModal from '../../Modules/Modals/LoginModal';
import RegisterModal from '../Modals/RegisterModal';
import { Backdrop } from '../../Components/Backdrop';

function MainNavBar() {
	const [viewRegister, setViewRegister] = useState(false);
	const [viewLogin, setViewLogin] = useState(false);

	function toggleRegister() {
		setViewRegister(prev => !prev);
	}

	function toggleLogin() {
		setViewLogin(prev => !prev);
	}

	function closeModal() {
		setViewRegister(false);
		setViewLogin(false);
	}

	return (
		<NavHeader>
			<Link to="/">
				<StyledLogo firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
			</Link>
			<NavButtonDiv>
				<MediumStyledButton primary onClick={() => toggleRegister()}>
					Register
				</MediumStyledButton>
				<MediumStyledButton onClick={() => toggleLogin()}>
					Login
				</MediumStyledButton>
			</NavButtonDiv>
			{viewLogin ? <LoginModal closeModal={closeModal} /> : null}
			{viewRegister ? <RegisterModal closeModal={closeModal} /> : null}
			{viewRegister || viewLogin ? <Backdrop onClick={closeModal} /> : null}
		</NavHeader>
	);
}

export default MainNavBar;
