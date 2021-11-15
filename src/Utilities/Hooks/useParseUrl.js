import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export function useParseUrl() {
	const [pathName, setPathName] = useState('');
	const [page, setPage] = useState(0);
	const [sortby, setSortby] = useState('createdAt_desc');
	const location = useLocation();

	useEffect(() => {
		const initialQueryString = queryString.parse(location.search);
		setPathName(location.pathname);
		setPage(Number(initialQueryString.page) || 0);
		if (initialQueryString.sortby === undefined) {
			return;
		} else {
			setSortby(initialQueryString.sortby);
		}
	}, [setPathName, location]);

	return { page, pathName, sortby };
}
