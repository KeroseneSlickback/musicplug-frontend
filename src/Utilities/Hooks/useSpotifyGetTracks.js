import { useState, useEffect, useRef } from 'react';

import axios from 'axios';

function useSpotifyDebounceFetch(searchParams) {
	const initialRender = useRef(false);
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (initialRender.current === false) {
			initialRender.current = true;
		} else {
			if (searchParams.albumId === '') {
				return;
			} else {
				const debounceFetch = setTimeout(() => {
					const accessToken = localStorage.getItem('spotify_access');
					setLoad(true);
					const headers = {
						Authorization: `Bearer ${accessToken}`,
					};
					const { albumId, params } = searchParams;
					const getData = async () => {
						await axios
							.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
								headers,
								params,
							})
							.then(response => {
								setData(response);
								setLoad(false);
							})
							.catch(e => {
								setError(e);
							});
					};
					getData();
				}, 500);
				return () => clearTimeout(debounceFetch);
			}
		}
	}, [searchParams]);

	return { data, load, error };
}

export default useSpotifyDebounceFetch;
