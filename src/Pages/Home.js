import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { SortDiv, SortButton } from '../Components/Buttons';
import PostModule from '../Modules/PostModule';
import { CenteredModuleDiv } from '../Components/Forms';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';

function Home() {
	const [sortNew, setSortNew] = useState(true);
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState({});

	function sortController(e, boolean) {
		e.preventDefault();
		setSortNew(boolean);
	}

	useEffect(() => {
		setLoading(true);
		axios
			.get('http://localhost:8888/posts?limit=10&page=0&sortBy=createdAt_asc')
			.then(res => {
				console.log(res);
				setPosts(res);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		console.log(posts.data);
	}, [posts]);

	return (
		<div>
			<SortDiv>
				<SortButton
					className={`${sortNew ? 'selected' : ''}`}
					onClick={e => sortController(e, true)}
				>
					New Posts
				</SortButton>
				<SortButton
					className={`${sortNew ? '' : 'selected'}`}
					onClick={e => sortController(e, false)}
				>
					Top Posts
				</SortButton>
			</SortDiv>

			{loading ? (
				<CenteredModuleDiv>
					<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
				</CenteredModuleDiv>
			) : (
				posts.data?.map(post => {
					return <PostModule data={post} key={post.id} />;
				})
			)}
		</div>
	);
}

export default Home;
