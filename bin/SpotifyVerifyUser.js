import React, { useEffect } from 'react';

import { MediumStyledButton } from '../src/Components/Buttons';

/*
https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123
*/

const CLIENT_ID = '5de079e8a1034873971db060a53bf092';
const RESPONSE_TYPE = 'code';
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/spotifyauth';
const SPACE_DELIMITER = '%20';
const SCOPES = ['user-read-private', 'user-read-email'];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

/*

http://localhost:3000/test#access_token=BQCUGF9r3MTFHyM9grGLMVMB1eqhy_ssR4Au__tsQR5R22w03mE1GV2AHdUWyeXWFw__6KjjqQ8cCpaKFzlrHQkaLyh2P7GmlhdEIAfbBKtXKY8JJHj7NDH59d2aM0Q5GHmNE_hqW1voVIoLd7MMd8o_mw&token_type=Bearer&expires_in=3600

http://localhost:3000/test?code=AQB1mgD4oglX3TxxvmOwahP4eiNflSnh06W0Y33xwKHhvp4yX41nRXcWqyD_LiV35thOllKNb2LVeZehA-pCUNxfn-NrwDfTljVmFsJGl6r5gWSkljUyOzYt4V0G3RXt0dhkBWGoJmiTfRgKH96X4M_A3gbxoIh2uCiivvTT7yhZqnuH9KdvwjAXLhZ5AmibBRGf-K1AZJ55HMRZ8MYstpRp

*/

const getReturnedParamsFromSpotifyAuth = hash => {
	const stringAfterHashtag = hash.substring(1);
	const paramsInUrl = stringAfterHashtag.split('&');
	const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
		// console.log(currentValue);
		const [key, value] = currentValue.split('=');
		accumulator[key] = value;
		return accumulator;
	}, {});
	return paramsSplitUp;
};

function SpotifyVerifyUser() {
	useEffect(() => {
		if (window.location.hash) {
			const { access_token, expires_in, token_type } =
				getReturnedParamsFromSpotifyAuth(window.location.hash);

			localStorage.clear();
			localStorage.setItem('accessToken', access_token);
			localStorage.setItem('tokenType', token_type);
			localStorage.setItem('expiresIn', expires_in);
		}
	});
	const handleLogin = () => {
		window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=${RESPONSE_TYPE}&show_dialog=true`;
	};
	return (
		<MediumStyledButton onClick={handleLogin}>
			Log In to Spotify
		</MediumStyledButton>
	);
}

export default SpotifyVerifyUser;
