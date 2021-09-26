import React, { useEffect } from 'react';

import { MediumStyledButton } from '../Components/Buttons';

// const handleRedirect = () => {
// 	let code = getCode();
// 	console.log(code);
// };

// const getCode = () => {
// 	let code = null;
// 	const queryString = window.location.search;
// 	if (queryString.length > 0) {
// 		const urlParams = new URLSearchParams(queryString);
// 		code = urlParams.get('code');
// 	}
// 	return code;
// };

const SpotifyAuth = () => {
	return (
		<div>
			<MediumStyledButton></MediumStyledButton>
		</div>
	);
};

export default SpotifyAuth;

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
          - Page saves tokens to localmemory
        - User is then redirected to Register/Login page
          - If registering, they fill in their infomation
          - Post request sent to backend to create account, sends back JWT token for user
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
