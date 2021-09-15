import { useState, useEffect } from 'react';

import axios from 'axios';

function useDebounceFetch(url, params) {
	const [initialRender, setInitialRender] = useState(true);
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (initialRender) {
			setInitialRender(false);
			console.log('Initial render!');
		} else {
			const debounceFetch = setTimeout(() => {
				try {
					setLoad(true);
					console.log('Fetching!');
					const getData = async () => {
						const data = await axios.get(url, {
							params: params,
						});
						setData(data);
						setLoad(false);
					};
					getData();
					console.log('Finished fetching!');
				} catch (e) {
					setError(e);
				}
			}, 1000);
			return () => clearTimeout(debounceFetch);
		}
	}, [params]);

	return { data, load, error };
}

export default useDebounceFetch;
