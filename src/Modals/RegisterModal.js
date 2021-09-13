import React from 'react';

import './Styles/Modal.css';

function Register(props) {
	function closeHandler() {
		props.closeModal();
	}

	function registerHandler(info) {
		console.log(info);
	}

	return (
		<div className="modal registerContainer">
			<div className="modalContainer">
				<h1>Welcome to MusicPlug!</h1>
				<h3>Enter the info below to register</h3>
				<form onSubmit={registerHandler}>
					<div className="modalInput">
						<input htmlFor="email" type="text" placeholder="Email" />
						<label htmlFor="email">Never shared</label>
					</div>
					<div className="modalInput">
						<input htmlFor="username" type="text" placeholder="Username" />
						<label htmlFor="username">A unique username</label>
					</div>
					<div className="modalInput">
						<input
							className="password"
							htmlFor="password"
							type="password"
							placeholder="Password"
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
