import React, { useState, useContext } from 'react';
import axios from 'axios';

import AuthContext, { useAuth } from './../Utilities/AuthContext';

import {
	FormContainer,
	FormBlock,
	FormInput,
	Form,
	FormLabel,
} from './../Components/Forms';
import { PageContainer } from '../Components/Containers';
import {
	MediumStyledButton,
	CloseButton,
	CloseButtonDiv,
} from './../Components/Buttons';
import spotifySVG from './../Utilities/Images/svg/spotify.svg';

function Register(props) {
	const authContext = useContext(AuthContext);
	const { spotifyVer } = useAuth();
	const [registerData, setRegisterData] = useState({
		email: '',
		username: '',
		password: '',
		passwordConfirmation: '',
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
		axios
			.post('http://localhost:8888/users/register', registerData)
			.then(response => {
				localStorage.setItem('user', JSON.stringify(response.data.user));
				localStorage.setItem('jwt', response.data.token.split(' ')[1]);
				console.log('Account Created');
				authContext.login();
				props.closeModal();
			})
			.catch(error => {
				console.log(error);
			});
	}

	return (
		<PageContainer>
			<FormContainer>
				<h1>Welcome to MusicPlug!</h1>
				{spotifyVer ? (
					<Form onSubmit={registerHandler}>
						<h3>Enter the info below to register</h3>
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
						<FormBlock>
							<FormInput
								name="passwordConfirmation"
								type="password"
								placeholder="Confirm Password"
								value={registerData.passwordConfirmation}
								onChange={handleChange}
							/>
						</FormBlock>
						<MediumStyledButton bottom>Create your Account</MediumStyledButton>
					</Form>
				) : (
					<FormBlock spotify>
						<h3>Please verify your account with Spotify first.</h3>
						<a href="http://localhost:8888/login">
							<img src={spotifySVG} alt="spotifySVG" />
						</a>
					</FormBlock>
				)}
			</FormContainer>
		</PageContainer>
	);
}

export default Register;
