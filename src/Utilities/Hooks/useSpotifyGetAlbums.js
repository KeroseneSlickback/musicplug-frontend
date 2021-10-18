import { useState, useEffect, useRef } from 'react';

import axios from 'axios';

function useSpotifyGetAlbums(searchParams) {
	const initialRender = useRef(false);
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (initialRender.current === false) {
			initialRender.current = true;
		} else if (searchParams.artistId === '' && data === '') {
			return;
		} else if (searchParams.artistId === '' && data !== '') {
			setData('');
			setLoad(false);
			setError(null);
		} else {
			if (searchParams.artistId === '') {
				return;
			} else {
				const debounceFetch = setTimeout(() => {
					const accessToken = localStorage.getItem('spotify_access');
					setLoad(true);
					const headers = {
						Authorization: `Bearer ${accessToken}`,
					};
					const { artistId, params } = searchParams;
					const getData = async () => {
						await axios
							.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
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
				}, 300);
				return () => clearTimeout(debounceFetch);
			}
		}
	}, [searchParams]);

	return { data, load, error };
}

export default useSpotifyGetAlbums;
