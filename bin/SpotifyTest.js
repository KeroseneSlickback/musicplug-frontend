import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SmallButton, MediumStyledButton } from '../Components/Buttons';
import { PageContainer } from '../Components/Containers';

import { checkJWTExp } from '../Utilities/UserAuthHelpers';

import { getReturnedParamsFromCallback } from '../Utilities/UserAuthHelpers';

function SpotifyTest() {
	const history = useHistory();
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (window.location.hash) {
			const { access_token, refresh_token } = getReturnedParamsFromCallback(
				window.location.hash
			);
			console.log('access:', access_token, 'refresh:', refresh_token);
			localStorage.removeItem('spotify_access');
			localStorage.removeItem('spotify_refresh');
			localStorage.setItem('spotify_access', access_token);
			localStorage.setItem('spotify_refresh', refresh_token);
			history.go(-3);
		} else {
			return;
		}
	}, [history]);

	function searchHandler(e) {
		setSearch(prev => e.target.value);
	}

	function registerHandler(e) {
		window.location = window.location.href.includes('localhost')
			? 'http://localhost:8888/login'
			: 'https://something.herokuapp.com/login';
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(search);
		e.target.reset();
	}

	function checkToken() {
		// find token in localstorage
		const checkedToken = checkJWTExp();
		if (checkedToken) {
			// User is still good!
		} else {
			// User needs to login again
			// Also refresh Spotify token
		}
	}

	return (
		<PageContainer>
			<MediumStyledButton onClick={registerHandler}>
				Register
			</MediumStyledButton>

			<form onSubmit={handleSubmit}>
				<input type="text" onChange={searchHandler} />
				<SmallButton>Search</SmallButton>
			</form>
			<SmallButton onClick={checkToken}>Check Token</SmallButton>
		</PageContainer>
	);
}

export default SpotifyTest;

/*

Spotify Auth and New Post system:

- User vists site, can look around as they wish. 
- Site retains (some method) to check if user is logged in or not
- If user clicks New Post:
  - Unregistered user case:
    - Site checks in local storage for access_token and refresh_token
      - If no access_token or refresh_token, user is asked to sign-in through Spotify
      - Spotify Button ports to the backend
        - The backend ports user to Spotify
        - Once verified, Spotify sends back code
        - Backend automatically requests access_token and refresh_token
        - Once recieved, backend redirects to frontend with both tokens
        - The redirect is ported to a frontend page to handle scraping the tokens
          - Page saves tokens, username, user email, user pic url, spotify url to localmemory
        - User is then redirected to Register/Login page
          - If registering, they fill in their infomation
						- Fetched info from spotify is auto-filled
          - Post request sent to backend to create account, sends back JWT token for user
					- When redirected, localstorage is cleared for user and JWT token is saved
        - If logging in, login post and token recieved, saves JWT token and user object to localstorage
        - On New Post, frontend makes a call to Spotify using access_token when searching
          - If access_token is invalid, refresh_token is sent off for new access_token by backend redirect, fetch, and redirect
        - New Post page 
          - User makes post with New Post
          - Post sent to backend, sending body and user
  - Registed User:
    - If user is registered, they login and backend sends for new access_token from Spotify, returns both new access_token and JWT token
    - 

*/

/*

Info from Spotify verify data:

display_name: 'Will'
email: 'mitchellspaur@gmail.com'
external_urls.spotify = 'https://open.spotify.com/user/12186645376'

images[0].url = 'https://i.scdn.co/image/ab6775700000ee853cc7e16a04d86fb2300231b5'




*/
