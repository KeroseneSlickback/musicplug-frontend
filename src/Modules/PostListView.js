import React, { useEffect } from 'react';

import PostModule from '../Modules/PostModule';
import { CenteredModuleDiv } from '../Components/Forms';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';

import useFetchPosts from '../Utilities/Hooks/useFetchPosts';

function PostListView({ data, load }) {
	return (
		<div>
			{load ? (
				<CenteredModuleDiv>
					<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
				</CenteredModuleDiv>
			) : data.data.length !== 0 ? (
				data.data?.map(post => {
					return <PostModule data={post} key={post._id} />;
				})
			) : (
				<CenteredModuleDiv>
					<h1>Oops, sorry, that was all.</h1>
				</CenteredModuleDiv>
			)}
		</div>
	);
}

export default PostListView;
