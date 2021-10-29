import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';
import { PostBodyDiv } from '../Components/PostComponents';
import {
	PageContainer,
	StylePageContainer,
	PostContainer,
} from '../Components/Containers';
import { CenteredModuleDiv } from '../Components/Forms';
import PostBodyModule from '../Modules/PostBodyModule';
import useFetchSinglePost from '../Utilities/Hooks/useFetchSinglePost';

function Post() {
	const { id } = useParams();
	const [searchId, setSearchId] = useState('');
	const { data, load, error } = useFetchSinglePost(id);

	useEffect(() => {
		setSearchId(id);
	}, [id]);

	return (
		<PageContainer>
			<StylePageContainer>
				{load || data === '' ? (
					<CenteredModuleDiv>
						<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
					</CenteredModuleDiv>
				) : (
					<PostBodyModule data={data.data} />
				)}
			</StylePageContainer>
			<StylePageContainer>
				{load ? (
					<CenteredModuleDiv>
						<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
					</CenteredModuleDiv>
				) : (
					<h1>Comment</h1>
				)}
			</StylePageContainer>
		</PageContainer>
	);
}

export default Post;
