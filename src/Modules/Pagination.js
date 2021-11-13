import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SortDiv, SortButton, PageButton } from '../Components/Buttons';
import { HomePageButtonDiv, PaginateDiv } from '../Components/Containers';
import PostListView from '../Modules/PostListView';
import useFetchPostCount from '../Utilities/Hooks/useFetchPostCount';

import useFetchPosts from '../Utilities/Hooks/useFetchPosts';
import WarningModule from './WarningModule';

function Pagination({ searchParams, pathName, fetchedPage, sortBy }) {
	const [url, setUrl] = useState('');
	const [countUrl, setCountUrl] = useState('');
	const { data, load, error } = useFetchPosts(url, searchParams);
	const [sortNew, setSortNew] = useState(true);
	const [endOfPage, setEndOfPage] = useState(false);
	const history = useHistory();
	const { count, countLoad, countError } = useFetchPostCount(
		countUrl,
		searchParams
	);

	useEffect(() => {
		if (pathName.includes('genre')) {
			setUrl('http://localhost:8888/posts/genre/');
			setCountUrl('http://localhost:8888/posts/genre/count');
		} else {
			setUrl('http://localhost:8888/posts');
			setCountUrl('http://localhost:8888/posts/count');
		}
	}, [pathName]);

	useEffect(() => {
		const testPageCount = searchParams.limit * (searchParams.page + 1);
		if (count > testPageCount) {
			setEndOfPage(false);
		} else if (count <= testPageCount) {
			setEndOfPage(true);
		}
	}, [data, searchParams, count]);

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
			{error || countError ? (
				<WarningModule string="Something went wrong. Please refresh the page and try again." />
			) : (
				<PostListView data={data} load={load} countLoad={countLoad} />
			)}

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
