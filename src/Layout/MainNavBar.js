import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/MainNavbar.css';

import logo from '../Images/svg/logo.svg';

function MainNavBar() {
	return (
		<header className="header">
			<div>
				<Link className="home" to="/">
					<img className="logo" src={logo} alt="logo" />
				</Link>
			</div>
			<div className="navigation">
				<div>
					<Link className="link" to="/register">
						<p className="btn-medium reg">Register</p>
					</Link>
				</div>
				{/* Conditional rendering if User is not logged in (register)/logged in */}
				<div>
					<Link className="link loginBtn" to="/login">
						<p className="btn-medium login">Login</p>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default MainNavBar;
