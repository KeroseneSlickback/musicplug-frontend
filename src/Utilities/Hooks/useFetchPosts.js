import { useState, useEffect } from 'react';

import axios from 'axios';

function useFetchPosts(url, params) {
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoad(true);
		const debounceFetch = setTimeout(() => {
			const getData = async () => {
				await axios
					.get(url, { params })
					.then(response => {
						setData(response);
						setLoad(false);
					})
					.catch(e => {
						setError(e);
					});
			};
			getData();
		}, 200);
		return () => clearTimeout(debounceFetch);
	}, [url, params]);

	return { data, load, error };
}

export default useFetchPosts;
