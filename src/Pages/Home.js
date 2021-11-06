import React, { useEffect, useState, useRef } from 'react';

import { PageContainer } from '../Components/Containers';
import Pagination from '../Modules/Pagination';
import { useParseUrl } from '../Utilities/Hooks/useParseUrl';

function Home() {
	const { page: fetchedPage, pathName } = useParseUrl();
	const [searchParams, setSearchParams] = useState({
		limit: 5,
		page: 0,
		sortby: 'createdAt_desc',
	});

	useEffect(() => {
		setSearchParams(prev => ({
			...prev,
			page: fetchedPage,
		}));
	}, [fetchedPage]);

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
				fetchedPage={fetchedPage}
				pathName={pathName}
				// url={url}
				sortBy={sortBy}
			/>
		</PageContainer>
	);
}

export default Home;
