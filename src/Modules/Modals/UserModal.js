import React, { useState } from 'react';
import {
	CloseButton,
	CloseButtonDiv,
	MediumStyledButton,
	SmallButton,
} from '../../Components/Buttons';
import { ModalContainer } from '../../Components/Containers';
import { DeleteUserDiv } from '../../Components/FooterComponents';
import {
	Form,
	FormBlock,
	FormContainer,
	FormH1,
	FormInput,
	FormLabel,
} from '../../Components/Forms';
import DeleteModal from './DeleteModal';

function UserModal(props) {
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [newUserInfo, setNewUserInfo] = useState({
		username: '',
		password: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setNewUserInfo(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const updateUser = e => {
		console.log(e);
	};

	const deleteUser = e => {
		console.log('deleted!');
	};

	const toggleDelete = e => {
		setShowDeleteConfirm(prev => !prev);
	};

	return (
		<ModalContainer delete>
			<FormContainer>
				<FormH1>User Settings</FormH1>
				<Form onSubmit={updateUser}>
					<FormBlock>
						<FormInput
							name="username"
							type="text"
							placeholder="Enter New Username"
							value={newUserInfo.username}
							onChange={handleChange}
						/>
						<FormLabel>New Username</FormLabel>
					</FormBlock>
					<FormBlock>
						<FormInput
							name="password"
							type="text"
							placeholder="Enter New Password"
							value={newUserInfo.password}
							onChange={handleChange}
						/>
						<FormLabel>New Password</FormLabel>
					</FormBlock>
					<MediumStyledButton>Submit Changes</MediumStyledButton>
				</Form>
				<DeleteUserDiv>
					<p>Delete Account, all posts and comments</p>
					<SmallButton delete onClick={toggleDelete}>
						Delete
					</SmallButton>
				</DeleteUserDiv>
				<div></div>
			</FormContainer>
			<CloseButtonDiv>
				<CloseButton onClick={props.closeModal} />
			</CloseButtonDiv>
			{showDeleteConfirm ? (
				<DeleteModal toggleDelete={toggleDelete} confirmDelete={deleteUser} />
			) : null}
		</ModalContainer>
	);
}

export default UserModal;
