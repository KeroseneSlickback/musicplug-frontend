import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SortDiv, SortButton, PageButton } from '../Components/Buttons';
import { HomePageButtonDiv, PaginateDiv } from '../Components/Containers';
import PostListView from '../Modules/PostListView';

function Pagination({ searchParams, pathName, fetchedPage, url, sortBy }) {
	const [sortNew, setSortNew] = useState(true);
	const [endOfPage, setEndOfPage] = useState(false);
	const history = useHistory();

	useEffect(() => {
		const check = pathName.includes('genre');
		console.log(check);
	}, [pathName]);

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

	const endPage = data => {
		if (data.data?.length < searchParams.limit) {
			setEndOfPage(true);
		} else {
			setEndOfPage(false);
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
			<PostListView searchParams={searchParams} endPage={endPage} url={url} />

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
