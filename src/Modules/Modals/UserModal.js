import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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
import AuthContext from '../../Utilities/AuthContext';

function UserModal(props) {
	const history = useHistory();
	const authContext = useContext(AuthContext);
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [message, setMessage] = useState('');
	const [newUsername, setNewUsername] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const updateUsername = e => {
		e.preventDefault();
		const jwt = localStorage.getItem('jwt');
		axios
			.patch(
				`http://localhost:8888/users/me`,
				{ username: newUsername },
				{
					headers: {
						Authorization: `Bearer ${jwt}`,
					},
				}
			)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const updatePassword = e => {
		e.preventDefault();
		const jwt = localStorage.getItem('jwt');
		axios
			.patch(
				`http://localhost:8888/users/me`,
				{ password: newPassword },
				{
					headers: {
						Authorization: `Bearer ${jwt}`,
					},
				}
			)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const deleteUser = e => {
		const jwt = localStorage.getItem('jwt');
		axios
			.delete('http://localhost:8888/users/me', {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.then(res => {
				localStorage.clear();
				authContext.logout();
				history.go(0);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const toggleDelete = e => {
		setMessage('your account');
		setShowDeleteConfirm(prev => !prev);
	};

	return (
		<ModalContainer sticky>
			<FormContainer>
				<FormH1>User Settings</FormH1>
				<Form onSubmit={updateUsername}>
					<FormBlock>
						<FormInput
							name="username"
							type="text"
							placeholder="Enter New Username"
							value={newUsername}
							onChange={e => setNewUsername(e.target.value)}
							required
						/>
						<FormLabel htmlFor="username">New Username</FormLabel>
					</FormBlock>
					<MediumStyledButton>Submit</MediumStyledButton>
				</Form>
				<Form onSubmit={updatePassword}>
					<FormBlock>
						<FormInput
							name="password"
							type="password"
							placeholder="Enter New Password"
							value={newPassword}
							onChange={e => setNewPassword(e.target.value)}
							required
						/>
						<FormLabel htmlFor="password">New Password</FormLabel>
					</FormBlock>
					<MediumStyledButton>Submit</MediumStyledButton>
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
				<DeleteModal
					toggleDelete={toggleDelete}
					confirmDelete={deleteUser}
					message={message}
				/>
			) : null}
		</ModalContainer>
	);
}

export default UserModal;
