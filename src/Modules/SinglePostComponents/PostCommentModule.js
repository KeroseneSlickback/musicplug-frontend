import React, { useEffect, useState } from 'react';
import {
	PostBodyCommentContainer,
	PostBodyCommentH1,
} from '../../Components/PostComponents';
import PostCommentForm from './PostCommentForm';
import SingleCommentModule from './SingleCommentModule';

function PostCommentModule(props) {
	const { comments, _id } = props.data;
	const [showCommentForm, setShowCommentForm] = useState(false);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			setShowCommentForm(true);
		} else {
			setShowCommentForm(false);
		}
	}, []);

	return (
		<PostBodyCommentContainer>
			<PostBodyCommentH1>Comments:</PostBodyCommentH1>
			{comments.map(comment => {
				return (
					<SingleCommentModule postId={_id} data={comment} key={comment._id} />
				);
			})}
			{showCommentForm ? <PostCommentForm id={_id} /> : null}
		</PostBodyCommentContainer>
	);
}

export default PostCommentModule;
