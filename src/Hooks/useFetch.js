import { useState, useEffect } from 'react';
const axios = require('axios');

function useFetch(url, params) {
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoad(true);
		const fetchData = async () => {
			const results = await axios.get(url, {
				params,
			});
			console.log(results.data);
		};
	});

	return { data, load, error };
}

export default useFetch;
