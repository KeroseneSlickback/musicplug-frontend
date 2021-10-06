import { useState, useEffect } from 'react';

import axios from 'axios';

function useSpotifyDebounceFetch(searchParams, freshAccessToken) {
	const [initialRender, setInitialRender] = useState(true);
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);
	const [headers, setHeaders] = useState({});

	useEffect(() => {
		setHeaders({
			Authorization: `Bearer ${freshAccessToken}`,
		});
	}, [freshAccessToken]);

	useEffect(() => {
		if (initialRender) {
			setInitialRender(false);
			console.log('Initial render');
		} else {
			const { url, params, delay } = searchParams;
			console.log('Attempting fetch');
			const debounceFetch = setTimeout(
				() => {
					setLoad(true);
					const getData = async () => {
						await axios(url, { headers, params })
							.then(response => {
								console.log('Fetched');
								console.log(response);
								setData(response);
								setLoad(false);
							})
							.catch(e => {
								setError(e);
								console.log('Failed fetch:', e);
							});
					};
					getData();
				},
				delay ? delay * 100 : 1000
			);
			return () => clearTimeout(debounceFetch);
		}
	}, [searchParams]);

	return { data, load, error };
}

export default useSpotifyDebounceFetch;
