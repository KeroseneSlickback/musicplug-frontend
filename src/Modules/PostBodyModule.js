import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SmallEmptyButton, TinyButton } from '../Components/Buttons';
import {
	PostBottomDiv,
	PostButtonDiv,
	PostBodyH1,
	PostBodyTextDiv,
	PostBodyContentDiv,
	PostBodyTextInnerDiv,
	PostUserDiv,
	EditDeleteButtonDiv,
} from '../Components/PostComponents';

import { FullHeart } from '../Utilities/Images/StyledSVG/FullHeart.js';
import { EmptyHeart } from '../Utilities/Images/StyledSVG/EmptyHeart.js';
import PostPatchModule from './PostPatchModule';
import DeleteModal from './Modals/DeleteModal';
import { Backdrop } from '../Components/Backdrop';
import { UserAccountSVG } from '../Utilities/Images/StyledSVG/UserAccountSVG';

function PostBodyModule(props) {
	const history = useHistory();
	const { title, body, votes, owner, _id, likedUsers } = props.data;
	const [userLiked, setUserLiked] = useState(false);
	const [message, setMessage] = useState('');
	const [postUser, setPostUser] = useState(false);
	const [voteNumber, setVoteNumber] = useState(0);
	const [formattedBody, setFormattedBody] = useState([]);
	const [showDeleteModule, setShowDeleteModule] = useState(false);
	const [showPatch, setShowPatch] = useState(false);
	const [patchData, setPatchData] = useState({
		title: '',
		body: '',
	});

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

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			const foundLike = likedUsers.find(liked => liked._id === user._id);
			if (foundLike) {
				setUserLiked(true);
			} else {
				setUserLiked(false);
			}
		}
		setVoteNumber(votes);
	}, [props.data, likedUsers, votes]);

	useEffect(() => {
		setPatchData({
			title,
			body,
		});
		const newBody = body.split('\n');
		// .map(str => <p>{str}</p>);
		setFormattedBody(newBody);
	}, [title, body]);

	const likePost = () => {
		const jwt = localStorage.getItem('jwt');
		if (jwt !== null) {
			if (userLiked) {
				setUserLiked(false);
				setVoteNumber(prev => prev - 1);
				axios
					.patch(
						`http://localhost:8888/posts/unlike/${_id}`,
						{},
						{
							headers: {
								Authorization: `Bearer ${jwt}`,
							},
						}
					)
					.then(res => {
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});
			} else {
				setUserLiked(true);
				setVoteNumber(prev => prev + 1);
				axios
					.patch(
						`http://localhost:8888/posts/like/${_id}`,
						{},
						{
							headers: {
								Authorization: `Bearer ${jwt}`,
							},
						}
					)
					.then(res => {
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	};

	const showEdit = () => {
		setShowPatch(prev => !prev);
	};

	const handlePostPatch = e => {
		const { name, value } = e.target;
		setPatchData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const submitPostPatch = e => {
		e.preventDefault();
		const jwt = localStorage.getItem('jwt');
		axios
			.patch(`http://localhost:8888/posts/${_id}`, patchData, {
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

	const toggleDelete = () => {
		setMessage('this post');
		setShowDeleteModule(prev => !prev);
	};

	const deletePost = () => {
		const jwt = localStorage.getItem('jwt');
		axios
			.delete(`http://localhost:8888/posts/${_id}`, {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.then(res => {
				console.log(res);
				history.push('/');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<PostBodyTextDiv>
			{showPatch ? (
				<PostPatchModule
					patchData={patchData}
					handlePostPatch={handlePostPatch}
				/>
			) : (
				<PostBodyTextInnerDiv>
					<PostBodyH1>{title}</PostBodyH1>
					<PostBodyContentDiv>
						{formattedBody.map((str, i) => {
							return <p key={i}>{str}</p>;
						})}
					</PostBodyContentDiv>
				</PostBodyTextInnerDiv>
			)}
			<PostBottomDiv>
				<PostUserDiv>
					{owner.avatarLink ? (
						<img src={owner.avatarLink} alt={owner.username} />
					) : (
						<UserAccountSVG />
					)}
					<p> - {owner.username}</p>
				</PostUserDiv>
				<PostButtonDiv>
					{postUser ? (
						showPatch ? (
							<EditDeleteButtonDiv>
								<TinyButton onClick={submitPostPatch}>Save</TinyButton>
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
						)
					) : null}
					<SmallEmptyButton onClick={() => likePost()}>
						<p>{voteNumber}</p>
						{userLiked ? <FullHeart /> : <EmptyHeart />}
					</SmallEmptyButton>
				</PostButtonDiv>
			</PostBottomDiv>
			{showDeleteModule ? (
				<DeleteModal
					toggleDelete={toggleDelete}
					confirmDelete={deletePost}
					message={message}
				/>
			) : null}
			{showDeleteModule ? <Backdrop onClick={toggleDelete} /> : null}
		</PostBodyTextDiv>
	);
}

export default PostBodyModule;
