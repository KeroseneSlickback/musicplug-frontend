import React, { useState } from 'react';

import './Styles/Modal.css';

function LoginModal(props) {
	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});

	function closeHandler() {
		props.closeModal();
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setLoginData(prevState => ({
			...prevState,
			[name]: value,
		}));
	}

	function loginHandler(e) {
		e.preventDefault();
		console.log(loginData);
	}

	return (
		<div className="modal">
			<div className="modalContainer">
				<h1>Welcome back!</h1>
				<h3>Login below</h3>
				<form onSubmit={loginHandler}>
					<div className="modalInput">
						<input
							name="username"
							type="text"
							placeholder="Username"
							value={loginData.username}
							onChange={handleChange}
						/>
						<label htmlFor="username">Your username</label>
					</div>
					<div className="modalInput">
						<input
							className="password"
							name="password"
							type="password"
							placeholder="Password"
							value={loginData.password}
							onChange={handleChange}
						/>
						<label htmlFor="password">Your password</label>
					</div>
					<div className="confirmBtn">
						<button className="btn-medium">Login</button>
					</div>
				</form>
			</div>
			<div className="closeButtonDiv">
				<button className="closeButton" onClick={closeHandler}></button>
			</div>
		</div>
	);
}

export default LoginModal;
