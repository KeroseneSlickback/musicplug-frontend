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
