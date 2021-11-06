import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SortDiv, SortButton, PageButton } from '../Components/Buttons';
import { HomePageButtonDiv, PaginateDiv } from '../Components/Containers';
import PostListView from '../Modules/PostListView';

import useFetchPosts from '../Utilities/Hooks/useFetchPosts';

function Pagination({ searchParams, pathName, fetchedPage, sortBy }) {
	const [url, setUrl] = useState('');
	const { data, load, error } = useFetchPosts(url, searchParams);
	const [sortNew, setSortNew] = useState(true);
	const [endOfPage, setEndOfPage] = useState(false);
	const history = useHistory();

	useEffect(() => {
		if (pathName.includes('genre')) {
			setUrl('http://localhost:8888/posts/genre/');
		} else {
			setUrl('http://localhost:8888/posts');
		}
	}, [pathName]);

	useEffect(() => {
		if (data.data?.length < searchParams.limit) {
			setEndOfPage(true);
		} else {
			setEndOfPage(false);
		}
	}, [data]);

	function sortController(e, boolean) {
		e.preventDefault();
		setSortNew(boolean);
		if (boolean === true) {
			sortBy('new');
		} else {
			sortBy('top');
		}
	}

	const paginate = expr => {
		switch (expr) {
			case 'next':
				history.push({
					pathname: pathName,
					search: `?page=${searchParams.page + 1}`,
				});
				break;
			case 'back':
				history.push({
					pathname: pathName,
					search: `?page=${searchParams.page - 1}`,
				});
				break;
			default:
				throw new Error();
		}
	};

	return (
		<PaginateDiv>
			<SortDiv>
				<SortButton
					className={`${sortNew ? 'selected' : ''}`}
					onClick={e => sortController(e, true)}
				>
					New Posts
				</SortButton>
				<SortButton
					className={`${sortNew ? '' : 'selected'}`}
					onClick={e => sortController(e, false)}
				>
					Top Posts
				</SortButton>
			</SortDiv>
			<PostListView data={data} load={load} />

			<HomePageButtonDiv>
				{fetchedPage === 0 ? null : (
					<PageButton onClick={() => paginate('back')}>Back</PageButton>
				)}
				{endOfPage ? null : (
					<PageButton primary onClick={() => paginate('next')}>
						Next
					</PageButton>
				)}
			</HomePageButtonDiv>
		</PaginateDiv>
	);
}

export default Pagination;
