import { useState, useEffect } from 'react';

import axios from 'axios';

function useFetchSinglePost(id) {
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoad(true);
		const debounceFetch = setTimeout(() => {
			const getData = async () => {
				await axios
					.get(`http://localhost:8888/posts/${id}`)
					.then(response => {
						setData(response);
						setLoad(false);
					})
					.catch(e => {
						setLoad(false);
						setError(e);
					});
			};
			getData();
		}, 200);
		return () => clearTimeout(debounceFetch);
	}, [id]);

	return { data, load, error };
}

export default useFetchSinglePost;
