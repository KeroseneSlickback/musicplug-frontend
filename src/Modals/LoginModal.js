import React, { useState } from 'react';

import './Styles/Modal.css';

function LoginModal(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function closeHandler() {
		props.closeModal();
	}

	function registerHandler(e) {
		e.preventDefault();
		const loginData = {
			username,
			password,
		};
		console.log(loginData);
	}

	return (
		<div className="modal registerContainer">
			<div className="modalContainer">
				<h1>Welcome back!</h1>
				<h3>Login below</h3>
				<form onSubmit={registerHandler}>
					<div className="modalInput">
						<input
							name="username"
							type="text"
							placeholder="Username"
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
						<label htmlFor="username">Your username</label>
					</div>
					<div className="modalInput">
						<input
							className="password"
							name="password"
							type="password"
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
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
