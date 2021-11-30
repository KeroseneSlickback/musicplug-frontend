import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../Utilities/AuthContext';

import { FormContainer, FormH1 } from '../../Components/Forms';
import { ModalContainer } from '../../Components/Containers';
import {
	MediumStyledButton,
	CloseButton,
	CloseButtonDiv,
} from '../../Components/Buttons';
import ConfirmMessageModule from '../MessageComponents/ConfirmMessageModule';

function LoginModal(props) {
	const history = useHistory();
	const [confirm, setConfirm] = useState(false);
	const authContext = useContext(AuthContext);

	const closeHandler = () => {
		props.closeModal();
	};

	const logoutHandler = e => {
		e.preventDefault();
		setConfirm(true);
		localStorage.removeItem('user');
		localStorage.removeItem('jwt');
		authContext.logout();
		setTimeout(() => {
			props.closeModal();
			history.go(0);
		}, 1000);
	};

	return (
		<ModalContainer>
			<FormContainer>
				<FormH1>Logout</FormH1>
				<h3>Are you sure you want to logout?</h3>
				<div>
					{confirm ? (
						<ConfirmMessageModule string="You've successfully logged out." />
					) : null}
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
