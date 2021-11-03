import React, { useState, useEffect } from 'react';
import { TinyButton } from '../Components/Buttons';
import {
	SinglePostDiv,
	PostUserDiv,
	CommentP,
	EditDeleteButtonDiv,
	CommentBottomBarDiv,
	CommentBodyDiv,
} from '../Components/PostComponents';

function SingleCommentModule(props) {
	const { body, owner, _id } = props.data;
	const [postUser, setPostUser] = useState(false);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			if (user._id === owner._id) {
				setPostUser(true);
			} else {
				setPostUser(false);
			}
		}
	}, [owner]);

	return (
		<SinglePostDiv>
			<PostUserDiv comment>
				<img src={owner.avatarLink} alt={owner.username} />
				<p>{owner.username}</p>
			</PostUserDiv>
			<CommentBodyDiv>
				<CommentP>{body}</CommentP>
				{postUser ? (
					<CommentBottomBarDiv>
						<EditDeleteButtonDiv>
							<TinyButton>Edit</TinyButton>
							<TinyButton alt>Delete</TinyButton>
						</EditDeleteButtonDiv>
					</CommentBottomBarDiv>
				) : null}
			</CommentBodyDiv>
		</SinglePostDiv>
	);
}

export default SingleCommentModule;
