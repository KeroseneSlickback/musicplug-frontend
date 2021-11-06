import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { PageContainer } from '../Components/Containers';
import Pagination from '../Modules/Pagination';
import { useParseUrl } from '../Utilities/Hooks/useParseUrl';

function Genre() {
	const { genre } = useParams();
	const { page: fetchedPage, pathName } = useParseUrl();
	const [searchParams, setSearchParams] = useState({
		limit: 5,
		page: 0,
		genre: undefined,
		sortby: 'createdAt_desc',
	});

	useEffect(() => {
		setSearchParams(prev => ({
			...prev,
			page: fetchedPage,
			genre,
		}));
	}, [fetchedPage, genre]);

	const sortBy = expr => {
		switch (expr) {
			case 'new':
				setSearchParams(prev => ({
					...prev,
					sortby: 'createdAt_desc',
				}));
				break;
			case 'top':
				setSearchParams(prev => ({
					...prev,
					sortby: 'votes_desc',
				}));
				break;
			default:
				throw new Error();
		}
	};

	return (
		<PageContainer>
			<Pagination
				searchParams={searchParams}
				pathName={pathName}
				fetchedPage={fetchedPage}
				// url={url}
				sortBy={sortBy}
			/>
		</PageContainer>
	);
}

export default Genre;
