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
	FormH1,
} from './../Components/Forms';
import { StylePageContainer } from '../Components/Containers';
import { MediumStyledButton, SpotifyButton } from './../Components/Buttons';
import WarningMessageModule from '../Modules/MessageComponents/WarningMessageModule';
import ConfirmMessageModule from '../Modules/MessageComponents/ConfirmMessageModule';
import { SpotifySVG } from '../Utilities/Images/StyledSVG/SpotifySVG';

function Register() {
	const history = useHistory();
	const authContext = useContext(AuthContext);
	const { spotifyVer } = useAuth();
	const [passwordMatch, setPasswordMatch] = useState(false);
	const [passwordLength, setPasswordLength] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const [registerError, setRegisterError] = useState(false);
	const [registerData, setRegisterData] = useState({
		email: '',
		username: '',
		password: '',
		passwordConfirmation: '',
		avatarLink: '',
		spotifyLink: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setRegisterData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const registerUser = () => {
		axios
			.post('http://localhost:8888/users/register', registerData)
			.then(response => {
				setConfirm(true);
				setRegisterError(false);
				localStorage.setItem('user', JSON.stringify(response.data.user));
				localStorage.setItem('jwt', response.data.token.split(' ')[1]);
				console.log('Account Created');
				authContext.login();
				setTimeout(() => {
					history.push('/newpost');
				}, 1000);
			})
			.catch(error => {
				setRegisterError(true);
			});
	};

	const registerHandler = e => {
		e.preventDefault();
		if (registerData.password !== registerData.passwordConfirmation) {
			setPasswordMatch(true);
		} else if (registerData.password.length < 7) {
			setPasswordMatch(false);
			setPasswordLength(true);
		} else {
			registerUser();
		}
	};

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
					setRegisterError(false);
					const username = res.data.display_name;
					const email = res.data.email;
					const spotifyLink = res.data.href;
					const avatarLink = res.data.images[0] ? res.data.images[0].url : '';
					// if (res.data.images[0]) {
					// 	setAvatarLink(res.data.images[0].url);
					// }
					setRegisterData(prevState => ({
						...prevState,
						username,
						email,
						avatarLink,
						spotifyLink,
					}));
				})
				.catch(err => {
					console.log(err);
					if (err.response.status === 401) {
						callForSpotifyRefresh();
					} else if (err.response.status === 403) {
						setRegisterError(true);
					}
				});
		} else {
			return;
		}
	}, [spotifyVer]);

	return (
		<StylePageContainer margin>
			<FormContainer>
				<FormH1>Welcome to MusicPlug!</FormH1>
				{spotifyVer ? (
					<Form onSubmit={registerHandler}>
						<h3>Enter the info below to register</h3>
						<FormBlock>
							<FormInput
								required
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
								required
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
								required
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
								required
								name="passwordConfirmation"
								type="password"
								placeholder="Confirm Password"
								value={registerData.passwordConfirmation}
								onChange={handleChange}
							/>
						</FormBlock>
						{passwordMatch ? (
							<WarningMessageModule string="Passwords do not match." />
						) : null}
						{passwordLength ? (
							<WarningMessageModule string="Password must be at least 7 characters long." />
						) : null}
						{confirm ? (
							<ConfirmMessageModule string="You've successfully registered." />
						) : null}
						{registerError ? (
							<WarningMessageModule string="Something went wrong. Please refresh the page and try again." />
						) : null}
						<MediumStyledButton bottom>Create your Account</MediumStyledButton>
					</Form>
				) : (
					<FormBlock spotify>
						<h3>Please verify your account with Spotify first.</h3>
						<SpotifyButton href="http://localhost:8888/spotify/login">
							<SpotifySVG />
						</SpotifyButton>
					</FormBlock>
				)}
			</FormContainer>
		</StylePageContainer>
	);
}

export default Register;
