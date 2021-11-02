import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SmallStyledButton } from '../Components/Buttons';
import {
	CommentTextArea,
	Form,
	CommentTextLabel,
	CommentButtonDiv,
} from '../Components/Forms';
import { CommentFormDiv } from '../Components/PostComponents';

function PostCommentForm(props) {
	const { id } = props;
	const history = useHistory();
	const [comment, setComment] = useState({ body: '' });
	const handleSubmit = e => {
		e.preventDefault();
		const jwt = localStorage.getItem('jwt');
		axios
			.post(`http://localhost:8888/posts/${id}/comments`, comment, {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.then(res => {
				console.log(res);
				history.go(0);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const handleCommentChange = e => {
		const { name, value } = e.target;
		setComment(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<CommentFormDiv>
			<Form onSubmit={handleSubmit}>
				<CommentTextLabel>Leave a comment!</CommentTextLabel>
				<CommentTextArea
					name="body"
					placeholder="I love this song!"
					value={comment.body}
					onChange={handleCommentChange}
					required
				/>
				<CommentButtonDiv>
					<SmallStyledButton smaller>Submit</SmallStyledButton>
				</CommentButtonDiv>
			</Form>
		</CommentFormDiv>
	);
}

export default PostCommentForm;
