import React, { useEffect } from 'react';

import PostModule from '../Modules/PostModule';
import { CenteredModuleDiv } from '../Components/Forms';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';

import useFetchPosts from '../Utilities/Hooks/useFetchPosts';

function PostListView({ searchParams, endPage, url }) {
	const { data, load, error } = useFetchPosts(url, searchParams);
	console.log(data);

	useEffect(() => {
		endPage(data);
	}, [endPage, data]);

	return (
		<div>
			{load ? (
				<CenteredModuleDiv>
					<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
				</CenteredModuleDiv>
			) : (
				data.data?.map(post => {
					return <PostModule data={post} key={post._id} />;
				})
			)}
		</div>
	);
}

export default PostListView;
