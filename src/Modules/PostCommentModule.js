import React from 'react';
import { PostBodyCommentContainer } from '../Components/PostComponents';
import PostCommentForm from './PostCommentForm';
import SingleCommentModule from './SingleCommentModule';

function PostCommentModule(props) {
	const { comments, _id } = props.data;
	return (
		<PostBodyCommentContainer>
			<h1>Comments:</h1>
			{comments.map(comment => {
				return <SingleCommentModule data={comment} key={comment._id} />;
			})}
			<PostCommentForm id={_id} />
		</PostBodyCommentContainer>
	);
}

export default PostCommentModule;
