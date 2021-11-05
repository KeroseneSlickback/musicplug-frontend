import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../Utilities/AuthContext';

import { FormContainer, FormH1 } from '../../Components/Forms';
import { ModalContainer } from '../../Components/Containers';
import {
	MediumStyledButton,
	CloseButton,
	CloseButtonDiv,
} from '../../Components/Buttons';

function LoginModal(props) {
	const history = useHistory();
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
		history.go(0);
	}

	return (
		<ModalContainer>
			<FormContainer>
				<FormH1>Logout</FormH1>
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
