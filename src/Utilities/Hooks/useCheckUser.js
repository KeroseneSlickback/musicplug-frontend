import { useState, useEffect } from 'react';

const useCheckUser = () => {
	const [JWTCheck, setJWTCheck] = useState(false);
	const [SpotRCheck, setSpotRCheck] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('JWT')) {
			setJWTCheck(true);
		}
		if (localStorage.getItem('spotify_refresh')) {
			setSpotRCheck(true);
		}
	}, []);

	return { JWTCheck, SpotRCheck };
};

export default useCheckUser;
