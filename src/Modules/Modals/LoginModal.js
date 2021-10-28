import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../Utilities/AuthContext';

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
	const history = useHistory();
	const authContext = useContext(AuthContext);
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
		axios
			.post('http://localhost:8888/users/login', loginData)
			.then(response => {
				localStorage.setItem('user', JSON.stringify(response.data.user));
				localStorage.setItem('jwt', response.data.token.split(' ')[1]);
				authContext.login();
				props.closeModal();
				history.go(0);
			})
			.catch(error => {
				console.log(error);
			});
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
					<MediumStyledButton bottom>Login</MediumStyledButton>
				</Form>
			</FormContainer>
			<CloseButtonDiv>
				<CloseButton onClick={closeHandler} />
			</CloseButtonDiv>
		</ModalContainer>
	);
}

export default LoginModal;
