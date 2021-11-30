import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { PageContainer } from '../Components/Containers';
import Pagination from '../Modules/Pagination';
import { useParseUrl } from '../Utilities/Hooks/useParseUrl';

// Genre is similar to Home page, but have an added Genre param that sorts accordingly

function Genre() {
	const { genre } = useParams();
	const { page: fetchedPage, pathName, sortby } = useParseUrl();
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
			sortby,
		}));
	}, [fetchedPage, genre, sortby]);

	return (
		<PageContainer>
			<Pagination
				searchParams={searchParams}
				pathName={pathName}
				fetchedPage={fetchedPage}
			/>
		</PageContainer>
	);
}

export default Genre;
