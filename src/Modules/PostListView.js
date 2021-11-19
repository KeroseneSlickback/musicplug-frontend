import React from 'react';

import PostModule from '../Modules/PostModule';
import { CenteredModuleDiv } from '../Components/Forms';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';
import {
	LoadingPageContainer,
	PostListContainer,
} from '../Components/Containers';

function PostListView({ data, load, countLoad }) {
	return (
		<PostListContainer>
			{load && countLoad ? (
				<LoadingPageContainer>
					<CenteredModuleDiv fade>
						<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
					</CenteredModuleDiv>
				</LoadingPageContainer>
			) : (
				data.data?.map(post => {
					return <PostModule data={post} key={post._id} />;
				})
			)}
		</PostListContainer>
	);
}

export default PostListView;
