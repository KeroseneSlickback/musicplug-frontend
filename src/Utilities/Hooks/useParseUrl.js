import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export function useParseUrl() {
	const [genre, setGenre] = useState('');
	const [page, setPage] = useState(0);
	const [sortBy, setSortBy] = useState(null);
	const location = useLocation();

	useEffect(() => {
		const initialQueryString = queryString.parse(location.search);
		setGenre(
			String(initialQueryString.genre) === 'undefined'
				? null
				: String(initialQueryString.genre)
		);
		setPage(Number(initialQueryString.page) || 0);
		setSortBy(
			String(initialQueryString.sortby) === 'undefined'
				? 'createdAt_asc'
				: String(initialQueryString.sortby)
		);
	});

	return { page, genre, sortBy };
}

// http://localhost:3000/?page=0&genre=rock&sortby=new
