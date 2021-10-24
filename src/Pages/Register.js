import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AuthContext, { useAuth } from './../Utilities/AuthContext';
import { callForSpotifyRefresh } from './../Utilities/UserAuthHelpers';

import {
	FormContainer,
	FormBlock,
	FormInput,
	Form,
	FormLabel,
} from './../Components/Forms';
import { StylePageContainer } from '../Components/Containers';
import { MediumStyledButton } from './../Components/Buttons';
import spotifySVG from './../Utilities/Images/svg/spotify.svg';

function Register() {
	const history = useHistory();
	const authContext = useContext(AuthContext);
	const { spotifyVer } = useAuth();
	const [registerData, setRegisterData] = useState({
		email: '',
		username: '',
		password: '',
		passwordConfirmation: '',
		avatarLink: '',
		spotifyLink: '',
	});

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
				history.push('/newpost');
			})
			.catch(error => {
				console.log(error);
			});
	}

	useEffect(() => {
		const access_token = localStorage.getItem('spotify_access');

		if (spotifyVer && spotifyVer !== undefined) {
			axios
				.get('https://api.spotify.com/v1/me', {
					headers: {
						Authorization: 'Bearer ' + access_token,
					},
				})
				.then(res => {
					console.log(res);
					const username = res.data.display_name;
					const email = res.data.email;
					const avatarLink = res.data.images[0].url;
					const spotifyLink = res.data.href;

					setRegisterData(prevState => ({
						...prevState,
						username,
						email,
						avatarLink,
						spotifyLink,
					}));
				})
				.catch(err => {
					if (err.response.status === 401) {
						callForSpotifyRefresh();
					}
				});
		} else {
			return;
		}
	}, [spotifyVer]);

	return (
		<StylePageContainer>
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
		</StylePageContainer>
	);
}

export default Register;
