import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export function useParseUrl() {
	const [pathName, setPathName] = useState('');
	const [page, setPage] = useState(0);
	const location = useLocation();

	useEffect(() => {
		const initialQueryString = queryString.parse(location.search);
		setPathName(location.pathname);
		setPage(Number(initialQueryString.page) || 0);
	}, [setPathName, location]);

	return { page, pathName };
}
