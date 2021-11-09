import { useState, useEffect } from 'react';

import axios from 'axios';

function useFetchPostCount(url, params) {
	const [count, setCount] = useState('');
	const [countLoad, setCountLoad] = useState(false);
	const [countError, setCountError] = useState(null);

	useEffect(() => {
		setCountLoad(true);
		const debounceFetch = setTimeout(() => {
			const getData = async () => {
				await axios
					.get(url, { params })
					.then(response => {
						setCount(response.data.count);
						setCountLoad(false);
					})
					.catch(e => {
						setCountError(e);
					});
			};
			getData();
		}, 300);
		return () => clearTimeout(debounceFetch);
	}, [url, params]);

	return { count, countLoad, countError };
}

export default useFetchPostCount;
