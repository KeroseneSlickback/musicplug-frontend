import React, { useState } from 'react';

import {
	FormContainer,
	FormBlock,
	FormInput,
	Form,
	FormLabel,
} from '../../Components/Forms';
import { ModalContainer } from '../../Components/Containers';
import {
	MediumStyledButton,
	CloseButton,
	CloseButtonDiv,
} from '../../Components/Buttons';

function RegisterModal(props) {
	const [registerData, setRegisterData] = useState({
		email: '',
		username: '',
		password: '',
	});

	function closeHandler() {
		props.closeModal();
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setRegisterData(prevState => ({
			...prevState,
			[name]: value,
		}));
	}

	function registerHandler(e) {
		e.preventDefault();
		console.log(registerData);
	}

	return (
		<ModalContainer>
			<FormContainer>
				<h1>Welcome to MusicPlug!</h1>
				<h3>Enter the info below to register</h3>
				<Form onSubmit={registerHandler}>
					<FormBlock>
						<FormInput
							name="email"
							type="text"
							placeholder="Email"
							value={registerData.email}
							onChange={handleChange}
						/>
						<FormLabel htmlFor="email">Never shared</FormLabel>
					</FormBlock>
					<FormBlock>
						<FormInput
							name="username"
							type="text"
							placeholder="Username"
							value={registerData.username}
							onChange={handleChange}
						/>
						<FormLabel htmlFor="username">Your Username</FormLabel>
					</FormBlock>
					<FormBlock>
						<FormInput
							className="password"
							name="password"
							type="password"
							placeholder="Password"
							value={registerData.password}
							onChange={handleChange}
						/>
						<FormLabel htmlFor="password">
							At least 7 characters and secure
						</FormLabel>
					</FormBlock>
					<MediumStyledButton>Create your Account</MediumStyledButton>
				</Form>
			</FormContainer>
			<CloseButtonDiv>
				<CloseButton onClick={closeHandler} />
			</CloseButtonDiv>
		</ModalContainer>
	);
}

export default RegisterModal;
