import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../Utilities/AuthContext';
import { getReturnedParamsFromCallback } from '../Utilities/UserAuthHelpers';

function Redirect() {
	const authContext = useContext(AuthContext);
	const history = useHistory();

	useEffect(() => {
		if (window.location.hash) {
			const { access_token, refresh_token } = getReturnedParamsFromCallback(
				window.location.hash
			);
			localStorage.removeItem('spotify_access');
			localStorage.removeItem('spotify_refresh');
			localStorage.setItem('spotify_access', access_token);
			localStorage.setItem('spotify_refresh', refresh_token);
			authContext.setSpotifyVerify();
		}

		if (authContext.loggedIn) {
			history.push('/newpost');
		}
		if (authContext.spotifyVer) {
			history.push('/register');
		}
	}, [history, authContext]);

	return <></>;
}

export default Redirect;
