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
	});

	useEffect(() => {
		setSearchParams(prev => ({
			...prev,
			page: fetchedPage,
			genre,
		}));
	}, [fetchedPage, genre]);

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
