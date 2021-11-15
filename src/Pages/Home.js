import React, { useEffect, useState } from 'react';

import { PageContainer } from '../Components/Containers';
import Pagination from '../Modules/Pagination';
import { useParseUrl } from '../Utilities/Hooks/useParseUrl';

function Home() {
	const { page: fetchedPage, pathName, sortby } = useParseUrl();
	const [searchParams, setSearchParams] = useState({
		limit: 5,
		page: 0,
		sortby: 'createdAt_desc',
	});

	useEffect(() => {
		setSearchParams(prev => ({
			...prev,
			page: fetchedPage,
			sortby,
		}));
	}, [fetchedPage, sortby]);

	const sortByController = expr => {
		switch (expr) {
			case 'new':
				setSearchParams({
					limit: 5,
					page: 0,
					sortby: 'createdAt_desc',
				});
				break;
			case 'top':
				setSearchParams({
					limit: 5,
					page: 0,
					sortby: 'votes_desc',
				});
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
				sortByController={sortByController}
			/>
		</PageContainer>
	);
}

export default Home;
