import React, { useRef } from 'react';

import './Styles/Modal.css';

function Register(props) {
	const emailInputRef = useRef();
	const usernameInputRef = useRef();
	const passwordInputRef = useRef();

	function closeHandler() {
		props.closeModal();
	}

	function registerHandler(e) {
		e.preventDefault();
		const email = emailInputRef.current.value;
		const username = usernameInputRef.current.value;
		const password = passwordInputRef.current.value;
		const registerData = {
			email,
			username,
			password,
		};
		console.log(registerData);
	}

	return (
		<div className="modal registerContainer">
			<div className="modalContainer">
				<h1>Welcome to MusicPlug!</h1>
				<h3>Enter the info below to register</h3>
				<form onSubmit={registerHandler}>
					<div className="modalInput">
						<input
							name="email"
							type="text"
							placeholder="Email"
							ref={emailInputRef}
						/>
						<label htmlFor="email">Never shared</label>
					</div>
					<div className="modalInput">
						<input
							name="username"
							type="text"
							placeholder="Username"
							ref={usernameInputRef}
						/>
						<label htmlFor="username">A unique username</label>
					</div>
					<div className="modalInput">
						<input
							className="password"
							name="password"
							type="password"
							placeholder="Password"
							ref={passwordInputRef}
						/>
						<label htmlFor="password">At least 7 characters and secure</label>
					</div>
					<div className="confirmBtn">
						<button className="btn-medium">Create your account</button>
					</div>
				</form>
			</div>
			<div className="closeButtonDiv">
				<button className="closeButton" onClick={closeHandler}></button>
			</div>
		</div>
	);
}

export default Register;
