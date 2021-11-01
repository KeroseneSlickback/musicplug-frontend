import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';
import { StylePageContainer } from '../Components/Containers';
import {
	PostBodyContainer,
	PostBodyGridContainer,
} from '../Components/PostComponents';
import { CenteredModuleDiv } from '../Components/Forms';
import PostBodyModule from '../Modules/PostBodyModule';
import useFetchSinglePost from '../Utilities/Hooks/useFetchSinglePost';
import PostBodyInfoModule from '../Modules/PostBodyInfoModule';
import PostCommentModule from '../Modules/PostCommentModule';

function Post() {
	const { id } = useParams();
	const [searchId, setSearchId] = useState('');
	const { data, load, error } = useFetchSinglePost(id);

	useEffect(() => {
		setSearchId(id);
	}, [id]);

	return (
		<PostBodyContainer>
			{load || data === '' ? (
				<StylePageContainer>
					<CenteredModuleDiv>
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
			{/* {load ? (
				<StylePageContainer>
					<CenteredModuleDiv>
						<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
					</CenteredModuleDiv>
				</StylePageContainer>
			) : (
			)} */}
		</PostBodyContainer>
	);
}

export default Post;
