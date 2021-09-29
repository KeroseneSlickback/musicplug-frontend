import React, { useContext } from 'react';
import AuthContext from '../../Utilities/AuthContext';

import { FormContainer } from '../../Components/Forms';
import { ModalContainer } from '../../Components/Containers';
import {
	MediumStyledButton,
	CloseButton,
	CloseButtonDiv,
} from '../../Components/Buttons';

function LoginModal(props) {
	const authContext = useContext(AuthContext);
	// Logout functions

	function closeHandler() {
		props.closeModal();
	}

	function logoutHandler(e) {
		e.preventDefault();
		localStorage.removeItem('user');
		localStorage.removeItem('jwt');
		authContext.logout();
		props.closeModal();
	}

	return (
		<ModalContainer>
			<FormContainer>
				<h1>Logout</h1>
				<h3>Are you sure you want to logout?</h3>
				<div>
					<MediumStyledButton bottom onClick={logoutHandler}>
						Logout
					</MediumStyledButton>
				</div>
			</FormContainer>
			<CloseButtonDiv>
				<CloseButton onClick={closeHandler} />
			</CloseButtonDiv>
		</ModalContainer>
	);
}

export default LoginModal;
