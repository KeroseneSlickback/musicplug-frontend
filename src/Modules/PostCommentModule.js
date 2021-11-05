import React from 'react';
import {
	PostBodyCommentContainer,
	PostBodyCommentH1,
} from '../Components/PostComponents';
import PostCommentForm from './PostCommentForm';
import SingleCommentModule from './SingleCommentModule';

function PostCommentModule(props) {
	const { comments, _id } = props.data;
	return (
		<PostBodyCommentContainer>
			<PostBodyCommentH1>Comments:</PostBodyCommentH1>
			{comments.map(comment => {
				return (
					<SingleCommentModule postId={_id} data={comment} key={comment._id} />
				);
			})}
			<PostCommentForm id={_id} />
		</PostBodyCommentContainer>
	);
}

export default PostCommentModule;
