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
import {
	ConfirmCommentMessage,
	WarningCommentMessage,
} from '../Components/Messages';

function PostCommentForm(props) {
	const { id } = props;
	const [confirm, setConfirm] = useState(false);
	const [submitError, setSubmitError] = useState(false);
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
				setConfirm(true);
				setSubmitError(false);
				setTimeout(() => {
					history.go(0);
				}, 1000);
			})
			.catch(err => {
				setSubmitError(true);
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
				{confirm ? (
					<ConfirmCommentMessage>
						<p>Comment successfully created.</p>
					</ConfirmCommentMessage>
				) : null}
				{submitError ? (
					<WarningCommentMessage>
						<p>Something went wrong. Please refresh page and try again.</p>
					</WarningCommentMessage>
				) : null}
				<CommentButtonDiv>
					<SmallStyledButton smaller>Submit</SmallStyledButton>
				</CommentButtonDiv>
			</Form>
		</CommentFormDiv>
	);
}

export default PostCommentForm;
