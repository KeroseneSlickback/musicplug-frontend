import { useState, useEffect, useRef } from 'react';

import axios from 'axios';

function useSpotifyDebounceFetch(params) {
	const initialRender = useRef(false);
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (initialRender.current === false) {
			initialRender.current = true;
		} else if (params.q === '') {
			setData('');
			setLoad(false);
			setError(null);
		} else {
			setLoad(true);
			const debounceFetch = setTimeout(() => {
				const accessToken = localStorage.getItem('spotify_access');
				const headers = {
					Authorization: `Bearer ${accessToken}`,
				};
				const getData = async () => {
					await axios
						.get('https://api.spotify.com/v1/search', { headers, params })
						.then(response => {
							setData(response);
							setLoad(false);
						})
						.catch(e => {
							setError(e);
						});
				};
				getData();
			}, 1000);
			return () => clearTimeout(debounceFetch);
		}
	}, [params]);

	return { data, load, error };
}

export default useSpotifyDebounceFetch;
