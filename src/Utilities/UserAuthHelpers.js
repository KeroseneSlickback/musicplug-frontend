import axios from 'axios';

export const getReturnedParamsFromCallback = hash => {
	const stringAfterHashtag = hash.substring(1);
	const paramsInUrl = stringAfterHashtag.split('&');
	const paramsReduce = paramsInUrl.reduce((accum, current) => {
		const [key, value] = current.split('=');
		accum[key] = value;
		return accum;
	}, {});
	return paramsReduce;
};

export const callForSpotifyRefresh = () => {
	const refresh_token = localStorage.getItem('spotify_refresh');
	axios
		.get('http://localhost:8888/refresh_token', { params: { refresh_token } })
		.then(res => {
			localStorage.setItem('spotify_access', res.data.access_token);
			return true;
		})
		.catch(err => console.log(err));
};
