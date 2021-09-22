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

function LoginModal(props) {
	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});

	function closeHandler() {
		props.closeModal();
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setLoginData(prevState => ({
			...prevState,
			[name]: value,
		}));
	}

	function loginHandler(e) {
		e.preventDefault();
		console.log(loginData);
	}

	return (
		<ModalContainer>
			<FormContainer>
				<h1>Welcome Back!</h1>
				<h3>Login below</h3>
				<Form onSubmit={loginHandler}>
					<FormBlock>
						<FormInput
							name="username"
							type="text"
							placeholder="Username"
							value={loginData.username}
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
							value={loginData.password}
							onChange={handleChange}
						/>
						<FormLabel htmlFor="password">Your Password</FormLabel>
					</FormBlock>
					<MediumStyledButton>Login</MediumStyledButton>
				</Form>
			</FormContainer>
			<CloseButtonDiv>
				<CloseButton onClick={closeHandler} />
			</CloseButtonDiv>
		</ModalContainer>
	);
}

export default LoginModal;
