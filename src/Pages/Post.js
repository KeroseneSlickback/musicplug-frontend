import React from 'react';
import { useParams } from 'react-router-dom';

import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';
import { StylePageContainer } from '../Components/Containers';
import {
	PostBodyContainer,
	PostBodyGridContainer,
} from '../Components/PostComponents';
import { CenteredModuleDiv } from '../Components/Forms';
import PostBodyModule from '../Modules/SinglePostComponents/PostBodyModule';
import useFetchSinglePost from '../Utilities/Hooks/useFetchSinglePost';
import PostBodyInfoModule from '../Modules/SinglePostComponents/PostBodyInfoModule';
import PostCommentModule from '../Modules/SinglePostComponents/PostCommentModule';
import WarningMessageModule from '../Modules/MessageComponents/WarningMessageModule';

function Post() {
	const { id } = useParams();
	const { data, load, error } = useFetchSinglePost(id);

	return (
		<PostBodyContainer>
			{error !== null ? (
				<StylePageContainer margin>
					<WarningMessageModule string="Something went wrong. Please refresh the page and try again." />
				</StylePageContainer>
			) : load || data === '' ? (
				<StylePageContainer margin>
					<CenteredModuleDiv fade>
						<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
					</CenteredModuleDiv>
				</StylePageContainer>
			) : (
				<PostBodyGridContainer>
					<PostBodyModule data={data.data} />
					<PostBodyInfoModule data={data.data} />
					<PostCommentModule data={data.data} />
				</PostBodyGridContainer>
			)}
		</PostBodyContainer>
	);
}

export default Post;
