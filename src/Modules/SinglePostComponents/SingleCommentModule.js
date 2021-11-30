import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { InactiveUserButton, TinyButton } from '../../Components/Buttons';
import {
	SinglePostDiv,
	CommentP,
	EditDeleteButtonDiv,
	CommentBottomBarDiv,
	CommentBodyDiv,
} from '../../Components/PostComponents';
import CommentPatchModule from './CommentPatchModule';
import DeleteModal from '../Modals/DeleteModal';
import { Backdrop } from '../../Components/Backdrop';
import { UserAccountSVG } from '../../Utilities/Images/StyledSVG/UserAccountSVG';

function SingleCommentModule(props) {
	const history = useHistory();
	const { body, owner, _id, postId } = props.data;
	const [postUser, setPostUser] = useState(false);
	const [message, setMessage] = useState('');
	const [showDeleteModule, setShowDeleteModule] = useState(false);
	const [showPatch, setShowPatch] = useState(false);
	const [patchData, setPatchData] = useState({ body: '' });

	useEffect(() => {
		setPatchData({ body });
	}, [body]);

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

	const showEdit = () => {
		setShowPatch(prev => !prev);
	};

	const handleCommentPatch = e => {
		const { name, value } = e.target;
		setPatchData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const submitCommentPatch = e => {
		e.preventDefault();
		const jwt = localStorage.getItem('jwt');
		axios
			.patch(
				`http://localhost:8888/posts/${postId}/comments/${_id}`,
				patchData,
				{
					headers: {
						Authorization: `Bearer ${jwt}`,
					},
				}
			)
			.then(res => {
				console.log(res);
				history.go(0);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const toggleDelete = () => {
		setMessage('this comment');
		setShowDeleteModule(prev => !prev);
	};

	const deleteComment = () => {
		const jwt = localStorage.getItem('jwt');
		axios
			.delete(`http://localhost:8888/posts/${postId}/comments/${_id}`, {
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

	return (
		<SinglePostDiv>
			<InactiveUserButton comment>
				{owner.avatarLink ? (
					<img src={owner.avatarLink} alt={owner.username} />
				) : (
					<UserAccountSVG />
				)}
				<p>{owner.username}</p>
			</InactiveUserButton>
			<CommentBodyDiv>
				{showPatch ? (
					<CommentPatchModule
						patchData={patchData}
						handleCommentPatch={handleCommentPatch}
					/>
				) : (
					<CommentP>{body}</CommentP>
				)}
				{postUser ? (
					<CommentBottomBarDiv>
						{showPatch ? (
							<EditDeleteButtonDiv>
								<TinyButton onClick={submitCommentPatch}>Save</TinyButton>
								<TinyButton alternative onClick={() => showEdit()}>
									Cancel
								</TinyButton>
							</EditDeleteButtonDiv>
						) : (
							<EditDeleteButtonDiv>
								<TinyButton onClick={() => showEdit()}>Edit</TinyButton>
								<TinyButton alternative onClick={() => toggleDelete()}>
									Delete
								</TinyButton>
							</EditDeleteButtonDiv>
						)}
					</CommentBottomBarDiv>
				) : null}
			</CommentBodyDiv>
			{showDeleteModule ? (
				<DeleteModal
					toggleDelete={toggleDelete}
					confirmDelete={deleteComment}
					message={message}
				/>
			) : null}
			{showDeleteModule ? <Backdrop onClick={toggleDelete} /> : null}
		</SinglePostDiv>
	);
}

export default SingleCommentModule;
