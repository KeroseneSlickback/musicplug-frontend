import React, { useEffect, useState } from 'react';

import { PageContainer } from '../Components/Containers';
import Pagination from '../Modules/Pagination';
import { useParseUrl } from '../Utilities/Hooks/useParseUrl';

function Home() {
	const { page: fetchedPage, pathName } = useParseUrl();
	const [searchParams, setSearchParams] = useState({
		limit: 5,
		page: 0,
	});

	useEffect(() => {
		setSearchParams(prev => ({
			...prev,
			page: fetchedPage,
		}));
	}, [fetchedPage]);

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

export default Home;
