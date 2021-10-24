import { useState, useEffect } from 'react';

import axios from 'axios';

function useFetchPosts(params) {
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoad(true);
		const debounceFetch = setTimeout(() => {
			const getData = async () => {
				await axios
					.get('http://localhost:8888/posts', { params })
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
	}, [params]);

	return { data, load, error };
}

export default useFetchPosts;
