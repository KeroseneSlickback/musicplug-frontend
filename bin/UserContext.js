import { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

const UserContext = createContext({
	validJWT: false,
	hasSpotifyRefresh: false,
	checkUser: () => {},
});

export const UserContextProvider = props => {
	const [JWT, setJWT] = useState(false);
	const [spotifyRefresh, setSpotifyRefresh] = useState(false);

	function checkUserHandler() {
		if (localStorage.hasOwnProperty('JWT')) {
			const JWTToken = localStorage.getItem('JWT');
			const decoded = jwt_decode(JWTToken);
			const currentTime = Date.now();
			if (decoded.exp >= currentTime) {
				console.log('there is a JWT');
				setJWT(true);
			} else {
				console.log('no JWT');
				setJWT(false);
			}
		} else {
			setJWT(false);
		}
		if (localStorage.hasOwnProperty('spotify_refresh')) {
			console.log('there is a refresh token');
			setSpotifyRefresh(true);
		} else {
			console.log('there is NO refresh token');
			setSpotifyRefresh(false);
		}
	}

	const context = {
		validJWT: JWT,
		hasSpotifyRefresh: spotifyRefresh,
		checkUser: checkUserHandler,
	};

	return (
		<UserContext.Provider value={context}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContext;
