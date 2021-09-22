import React, { useState } from 'react';

import { FormContainer } from '../../Components/Forms';
import { ModalContainer } from '../../Components/Containers';
import {
	MediumStyledButton,
	CloseButton,
	CloseButtonDiv,
} from '../../Components/Buttons';

function LoginModal(props) {
	// Logout functions

	return (
		<ModalContainer>
			<FormContainer>
				<h1>Logout</h1>
				<h3>Are you sure you want to logout?</h3>
				<MediumStyledButton>Logout</MediumStyledButton>
			</FormContainer>
			<CloseButtonDiv>
				<CloseButton onClick={closeHandler} />
			</CloseButtonDiv>
		</ModalContainer>
	);
}

export default LoginModal;
