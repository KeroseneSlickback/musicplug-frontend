import React from 'react';
import {
	SinglePostDiv,
	PostUserDiv,
	CommentP,
} from '../Components/PostComponents';

function SingleCommentModule(props) {
	const { body, owner, _id } = props.data;

	return (
		<SinglePostDiv>
			<PostUserDiv comment>
				<img src={owner.avatarLink} alt={owner.username} />
				<p>{owner.username}</p>
			</PostUserDiv>
			<CommentP>{body}</CommentP>
		</SinglePostDiv>
	);
}

export default SingleCommentModule;
