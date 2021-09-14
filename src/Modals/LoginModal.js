import React, { useRef } from 'react';

import './Styles/Modal.css';

function LoginModal(props) {
	const usernameInputRef = useRef();
	const passwordInputRef = useRef();

	function closeHandler() {
		props.closeModal();
	}

	function registerHandler(e) {
		e.preventDefault();
		const username = usernameInputRef.current.value;
		const password = passwordInputRef.current.value;
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
							ref={usernameInputRef}
						/>
						<label htmlFor="username">Your username</label>
					</div>
					<div className="modalInput">
						<input
							className="password"
							name="password"
							type="password"
							placeholder="Password"
							ref={passwordInputRef}
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
