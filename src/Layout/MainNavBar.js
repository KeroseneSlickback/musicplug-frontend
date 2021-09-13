import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/MainNavbar.css';

import RegisterModal from '../Modals/RegisterModal';
import LoginModal from '../Modals/LoginModal';
import Backdrop from '../Modals/Backdrop';

import logo from '../Images/svg/logo.svg';

function MainNavBar() {
	const [viewRegister, setViewRegister] = useState(false);
	const [viewLogin, setViewLogin] = useState(false);

	function toggleRegister() {
		setViewRegister(prev => !prev);
		console.log(viewRegister);
	}

	function toggleLogin() {
		setViewLogin(prev => !prev);
		console.log(viewLogin);
	}

	function closeModal() {
		setViewRegister(false);
		setViewLogin(false);
	}

	return (
		<header className="header">
			<div>
				<Link className="home" to="/">
					<img className="logo" src={logo} alt="logo" />
				</Link>
			</div>
			<div className="navigation">
				<div>
					<button
						className="btn-medium regBtn"
						onClick={() => toggleRegister()}
					>
						Register
					</button>
				</div>
				{/* Conditional rendering if User is not logged in (register)/logged in */}
				<div>
					<button className="btn-medium loginBtn" onClick={() => toggleLogin()}>
						Login
					</button>
				</div>
			</div>
			{viewRegister ? <RegisterModal closeModal={closeModal} /> : null}
			{viewLogin ? <LoginModal closeModal={closeModal} /> : null}
			{viewRegister || viewLogin ? <Backdrop closeModal={closeModal} /> : null}
		</header>
	);
}

export default MainNavBar;
