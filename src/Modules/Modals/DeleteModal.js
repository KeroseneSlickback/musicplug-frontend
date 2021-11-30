import React from 'react';
import {
	CloseButton,
	CloseButtonDiv,
	MediumStyledButton,
} from '../../Components/Buttons';
import { ModalContainer } from '../../Components/Containers';
import { FormContainer, FormH1 } from '../../Components/Forms';
import ConfirmMessageModule from '../MessageComponents/ConfirmMessageModule';
import WarningMessageModule from '../MessageComponents/WarningMessageModule';

function DeleteModal(props) {
	return (
		<ModalContainer delete>
			<FormContainer>
				<FormH1>Delete</FormH1>
				<h3>Are you use you want to delete {props.message}?</h3>

				{props.deleteUserConfirm ? (
					<ConfirmMessageModule string="Account deleted." />
				) : null}
				{props.deleteUserError ? (
					<WarningMessageModule string="Error. Please refresh and try again." />
				) : null}
				<div>
					<MediumStyledButton bottom onClick={props.confirmDelete}>
						Yes
					</MediumStyledButton>
				</div>
			</FormContainer>
			<CloseButtonDiv>
				<CloseButton dark onClick={props.toggleDelete} />
			</CloseButtonDiv>
		</ModalContainer>
	);
}

export default DeleteModal;
