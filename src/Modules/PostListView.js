import React from 'react';

import PostModule from '../Modules/PostModule';
import { CenteredModuleDiv } from '../Components/Forms';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';
import {
	LoadingPageContainer,
	PostListContainer,
} from '../Components/Containers';
import RegularMessageModule from './MessageComponents/RegularMessageModule';

function PostListView({ data, load, countLoad }) {
	return (
		<PostListContainer>
			{load && countLoad ? (
				<LoadingPageContainer>
					<CenteredModuleDiv fade>
						<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
					</CenteredModuleDiv>
				</LoadingPageContainer>
			) : data.data?.length === 0 ? (
				<RegularMessageModule string="No posts found. Create a New Post!" />
			) : (
				data.data?.map(post => {
					return <PostModule data={post} key={post._id} />;
				})
			)}
		</PostListContainer>
	);
}

export default PostListView;
