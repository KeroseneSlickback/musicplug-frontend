import { useState, useEffect } from 'react';

import axios from 'axios';

function useDebounceFetch(searchParams) {
	const { url, params, delay } = searchParams;
	const [initialRender, setInitialRender] = useState(true);
	const [data, setData] = useState('');
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (initialRender) {
			setInitialRender(false);
			console.log('Initial render');
		} else {
			console.log('Attempting fetch');
			const debounceFetch = setTimeout(
				() => {
					setLoad(true);
					const getData = async () => {
						await axios({ url, params })
							.then(response => {
								console.log('Fetched');
								setData(response);
								setLoad(false);
							})
							.catch(e => {
								setError(e);
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

export default useDebounceFetch;
