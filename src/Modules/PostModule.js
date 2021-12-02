import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
	InactiveUserButton,
	SmallEmptyButton,
	SmallStyledLinkButton,
	SmallStyledReactDomLink,
} from '../Components/Buttons';
import { PostContainer } from '../Components/Containers';
import {
	PostButtonDiv,
	PostImg,
	PostTopDiv,
	TextDiv,
	PostViewImgUserDiv,
} from '../Components/PostComponents';

import { FullHeart } from '../Utilities/Images/StyledSVG/FullHeart.js';
import { EmptyHeart } from '../Utilities/Images/StyledSVG/EmptyHeart.js';

import { HeadphoneSVG } from '../Utilities/Images/StyledSVG/HeadphoneSVG';
import { ChatSVG } from '../Utilities/Images/StyledSVG/ChatSVG';
import { BrokenImageSVG } from '../Utilities/Images/StyledSVG/BrokenImageSVG';
import { UserAccountSVG } from '../Utilities/Images/StyledSVG/UserAccountSVG';

function PostModule(props) {
	const { title, body, genre, comments, votes, owner, _id, likedUsers } =
		props.data;
	const [userLiked, setUserLiked] = useState(false);
	const [voteNumber, setVoteNumber] = useState(0);
	const [formattedBody, setFormattedBody] = useState([]);
	const [formattedGenre, setFormattedGenre] = useState({
		genre: '',
		path: '/',
	});
	const { albumImgUrl, albumName, trackUrl, albumUrl, artistUrl } =
		props.data.recommendation;

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
	}, [likedUsers, votes]);

	useEffect(() => {
		switch (genre) {
			case 'pop':
				setFormattedGenre({ genre: 'Pop', path: '/genre/pop' });
				break;
			case 'hiphop':
				setFormattedGenre({ genre: 'Hip-Hop', path: '/genre/hiphop' });
				break;
			case 'rock':
				setFormattedGenre({ genre: 'Rock', path: '/genre/rock' });
				break;
			case 'country':
				setFormattedGenre({ genre: 'Country', path: '/genre/country' });
				break;
			case 'electronic':
				setFormattedGenre({ genre: 'Electronic', path: '/genre/electronic' });
				break;
			case 'bluesjazz':
				setFormattedGenre({ genre: 'Blues/Jass', path: '/genre/bluesjazz' });
				break;
			case 'classical':
				setFormattedGenre({ genre: 'Classical', path: '/genre/classical' });
				break;
			case 'funkrb':
				setFormattedGenre({ genre: 'Funk/R&B', path: '/genre/funkrb' });
				break;
			default:
				throw new Error();
		}
	}, [genre]);

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
						`https://musicplug.herokuapp.com/posts/unlike/${_id}`,
						{},
						{
							headers: {
								Authorization: `Bearer ${jwt}`,
							},
						}
					)
					// .then(res => {
					// 	console.log(res);
					// })
					.catch(err => {
						console.log(err);
					});
			} else {
				setUserLiked(true);
				setVoteNumber(prev => prev + 1);
				axios
					.patch(
						`https://musicplug.herokuapp.com/posts/like/${_id}`,
						{},
						{
							headers: {
								Authorization: `Bearer ${jwt}`,
							},
						}
					)
					// .then(res => {
					// 	console.log(res);
					// })
					.catch(err => {
						console.log(err);
					});
			}
		}
	};

	return (
		<PostContainer>
			<PostTopDiv>
				<Link to={`/post/${_id}`}>
					<TextDiv>
						<h3>{title}</h3>
						<h5>- Posted by {owner.username}</h5>
						{formattedBody.map((str, i) => {
							return <p key={i}>{str}</p>;
						})}
					</TextDiv>
					<PostViewImgUserDiv>
						{albumImgUrl ? (
							<PostImg src={albumImgUrl} alt={albumName} />
						) : (
							<BrokenImageSVG />
						)}
					</PostViewImgUserDiv>
				</Link>
			</PostTopDiv>
			<PostButtonDiv>
				<SmallStyledReactDomLink to={formattedGenre.path}>
					{formattedGenre.genre}
				</SmallStyledReactDomLink>

				<SmallStyledLinkButton
					href={
						trackUrl !== ''
							? trackUrl
							: albumUrl !== ''
							? albumUrl
							: artistUrl !== ''
							? artistUrl
							: null
					}
					target="_blank"
					rel="noreferrer"
				>
					<HeadphoneSVG />
					Spotify
				</SmallStyledLinkButton>

				<SmallStyledReactDomLink to={`/post/${_id}`}>
					<ChatSVG />
					<p>{comments.length} Comments</p>
				</SmallStyledReactDomLink>

				<SmallEmptyButton onClick={() => likePost()}>
					{voteNumber}
					{userLiked ? <FullHeart /> : <EmptyHeart />}
				</SmallEmptyButton>
			</PostButtonDiv>
		</PostContainer>
	);
}

export default PostModule;
