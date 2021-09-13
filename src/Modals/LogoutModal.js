import React from 'react';

import './Styles/Modal.css';

function LogoutModal() {
	return;
	<div className="modal">
		<div className="modalContainer">
			<h1>Welcome back!</h1>
			<h3>Login below</h3>
			<form onSubmit={registerHandler}>
				<div className="confirmBtn">
					<button className="btn-medium">Login</button>
				</div>
			</form>
		</div>
		<div className="closeButtonDiv">
			<button className="closeButton" onClick={closeHandler}></button>
		</div>
	</div>;
}

export default LogoutModal;
