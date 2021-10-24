import React from 'react';

import PostModule from '../Modules/PostModule';
import { CenteredModuleDiv } from '../Components/Forms';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';

import useFetchPosts from '../Utilities/Hooks/useFetchPosts';

function PostListView({ searchParams }) {
	const { data, load, error } = useFetchPosts(searchParams);
	// console.log(data);
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
