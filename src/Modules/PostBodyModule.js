import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

function PostBodyModule(props) {
	const { title, body, votes, owner, _id, likedUsers } = props.data;
	const [userLiked, setUserLiked] = useState(false);
	const [postUser, setPostUser] = useState(false);
	const [voteNumber, setVoteNumber] = useState(0);
	const [formattedBody, setFormattedBody] = useState([]);

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
		const newBody = body.split('\n');
		// .map(str => <p>{str}</p>);
		setFormattedBody(newBody);
	}, [body]);

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
	return (
		<PostBodyTextDiv>
			<PostBodyTextInnerDiv>
				<PostBodyH1>{title}</PostBodyH1>
				<PostBodyContentDiv>
					{formattedBody.map((str, i) => {
						return <p key={i}>{str}</p>;
					})}
				</PostBodyContentDiv>
			</PostBodyTextInnerDiv>
			<PostBottomDiv>
				<PostUserDiv>
					<img src={owner.avatarLink} alt={owner.username} />
					<p> - {owner.username}</p>
				</PostUserDiv>
				<PostButtonDiv>
					{postUser ? (
						<EditDeleteButtonDiv>
							<TinyButton>Edit</TinyButton>
							<TinyButton alt>Delete</TinyButton>
						</EditDeleteButtonDiv>
					) : null}
					<SmallEmptyButton onClick={() => likePost()}>
						<p>{voteNumber}</p>
						{userLiked ? <FullHeart /> : <EmptyHeart />}
					</SmallEmptyButton>
				</PostButtonDiv>
			</PostBottomDiv>
		</PostBodyTextDiv>
	);
}

export default PostBodyModule;
