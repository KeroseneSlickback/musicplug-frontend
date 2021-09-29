import React, { createContext, useEffect, useState } from 'react';

const sleep = ms => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

const AuthContext = createContext({});

export const AuthProvider = props => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [spotifyVer, setSpotifyVer] = useState(false);

	useEffect(() => {
		// Pull saved login state from localStorage
		if (
			localStorage.hasOwnProperty('jwt') &&
			localStorage.hasOwnProperty('user')
		) {
			setLoggedIn(true);
		}
		if (localStorage.hasOwnProperty('spotify_refresh')) {
			setSpotifyVer(true);
		}
	}, []);

	const login = () => {
		// sleep(2000).then(() => setLoggedIn(true));
		setLoggedIn(true);
	};

	const logout = () => {
		// sleep(2000).then(() => setLoggedIn(false));
		setLoggedIn(false);
	};

	const setSpotifyVerify = () => {
		setSpotifyVer(true);
	};

	const authContextValue = {
		login,
		loggedIn,
		logout,
		spotifyVer,
		setSpotifyVerify,
	};

	return <AuthContext.Provider value={authContextValue} {...props} />;
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;
