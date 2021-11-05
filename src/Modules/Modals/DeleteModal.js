import React from 'react';
import {
	CloseButton,
	CloseButtonDiv,
	MediumStyledButton,
} from '../../Components/Buttons';
import { ModalContainer } from '../../Components/Containers';
import { FormContainer, FormH1 } from '../../Components/Forms';

function DeleteModal(props) {
	return (
		<ModalContainer delete>
			<FormContainer>
				<FormH1>Delete</FormH1>
				<h3>Are you use you want to delete?</h3>
				<div>
					<MediumStyledButton bottom onClick={props.confirmDelete}>
						Yes
					</MediumStyledButton>
				</div>
			</FormContainer>
			<CloseButtonDiv>
				<CloseButton onClick={props.toggleDelete} />
			</CloseButtonDiv>
		</ModalContainer>
	);
}

export default DeleteModal;
