import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SortDiv, SortButton, PageButton } from '../Components/Buttons';
import { HomePageButtonDiv, PageContainer } from '../Components/Containers';
import PostListView from '../Modules/PostListView';
import { useParseUrl } from '../Utilities/Hooks/useParseUrl';

function Home() {
	const {
		page: fetchedPage,
		genre: fetchedGenre,
		sortBy: fetchedSortBy,
	} = useParseUrl();
	const history = useHistory();
	const [page, setPage] = useState();
	const [sortNew, setSortNew] = useState(true);
	const [searchParams, setSearchParams] = useState({
		limit: 5,
		page: 0,
		genre: 'rock',
		sortBy: 'createdAt_asc',
	});

	useEffect(() => {
		setSearchParams(prev => ({
			...prev,
			page: fetchedPage,
			genre: fetchedGenre,
			sortBy: fetchedSortBy,
		}));
		setPage(fetchedPage);
	}, [fetchedPage, fetchedGenre, fetchedSortBy]);

	function sortController(e, boolean) {
		e.preventDefault();
		setSortNew(boolean);
	}

	const paginate = expr => {
		switch (expr) {
			case 'next':
				return history.push({
					pathname: '/',
					search: `?page=${page + 1}`,
				});
				break;
			case 'back':
				history.push({
					pathname: '/',
					search: `?page=${page - 1}`,
				});
				break;
			default:
				throw new Error();
		}
	};

	return (
		<PageContainer>
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
			<PostListView searchParams={searchParams} />

			<HomePageButtonDiv>
				{fetchedPage === 0 ? null : (
					<PageButton onClick={() => paginate('back')}>Back</PageButton>
				)}
				<PageButton primary onClick={() => paginate('next')}>
					Next
				</PageButton>
			</HomePageButtonDiv>
		</PageContainer>
	);
}

export default Home;
