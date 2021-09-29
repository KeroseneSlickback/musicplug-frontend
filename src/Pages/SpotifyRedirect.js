import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../Utilities/AuthContext';
import { getReturnedParamsFromCallback } from '../Utilities/UserAuthHelpers';

function SpotifyRedirect() {
	const authContext = useContext(AuthContext);
	const history = useHistory();

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
			authContext.setSpotifyVerify();
			history.push('/register');
		} else {
			return;
		}
	}, [history]);

	return <></>;
}

export default SpotifyRedirect;
