import { useState, useEffect } from 'react';

import axios from 'axios';

/*

Input:

State from parent component:

Params needs source url and API specific params. Delay is optional as standard is 1000ms. 

const [searchParams, setSearchParams] = useState({
		url: 'https://ws.audioscrobbler.com/2.0',
		params: {
			method: 'artist.search',
			limit: 3,
			artist: 'cher',
			api_key: '965e58baf164ac9a296b3190e678218e',
			format: 'json',
		},
		delay: 10,
	});

const fetchedData = useDebounceFetch(searchParams);

Alter params state with:

setSearchParams(prevState => ({
			...prevState,
			params: { ...prevState.params, [name]: value },
		}));

*/

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

/*

Output is offered in two steps:

- On loading to offer app a stage to show Now Loading... 
- On data/error retrieved with loading off. 

*/

export default useDebounceFetch;
