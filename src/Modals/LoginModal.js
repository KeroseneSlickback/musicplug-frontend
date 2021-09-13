import React from 'react';

import './Styles/Modal.css';

function LoginModal(props) {
	function closeHandler() {
		props.closeModal();
	}

	function registerHandler(info) {
		console.log(info);
	}

	return (
		<div className="modal registerContainer">
			<div className="modalContainer">
				<h1>Welcome back!</h1>
				<h3>Login below</h3>
				<form onSubmit={registerHandler}>
					<div className="modalInput">
						<input htmlFor="username" type="text" placeholder="Username" />
						<label htmlFor="username">Your username</label>
					</div>
					<div className="modalInput">
						<input
							className="password"
							htmlFor="password"
							type="password"
							placeholder="Password"
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
