import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
	SmallEmptyButton,
	SmallStyledLinkButton,
	SmallStyledReactDomLink,
} from '../Components/Buttons';
import { PostContainer } from '../Components/Containers';
import {
	PostBottomDiv,
	PostButtonDiv,
	PostImg,
	PostTopDiv,
	TextDiv,
	PostUserDiv,
} from '../Components/PostComponents';

import { FullHeart } from '../Utilities/Images/StyledSVG/FullHeart.js';
import { EmptyHeart } from '../Utilities/Images/StyledSVG/EmptyHeart.js';

import chatSVG from '../Utilities/Images/svg/forum_black_24dp.svg';
import headphoneSVG from '../Utilities/Images/svg/headphones_black_24dp.svg';
import userIcon from '../Utilities/Images/svg/userIcon.svg';
import brokenImage from '../Utilities/Images/svg/broken_image.svg';

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
		<PostContainer>
			<PostTopDiv>
				<Link to={`/post/${_id}`}>
					<TextDiv>
						<h3>{title}</h3>
						{formattedBody.map((str, i) => {
							return <p key={i}>{str}</p>;
						})}
					</TextDiv>
					<PostImg
						src={albumImgUrl ? albumImgUrl : brokenImage}
						alt={albumName}
					/>
				</Link>
			</PostTopDiv>
			<PostBottomDiv>
				<PostUserDiv small>
					<img
						src={owner.avatarLink !== '' ? owner.avatarLink : userIcon}
						alt={owner.username}
					/>
					<p> - {owner.username}</p>
				</PostUserDiv>
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
						<img src={headphoneSVG} alt="listen" />
						Listen on Spotify
					</SmallStyledLinkButton>
					<SmallStyledReactDomLink to={`/post/${_id}`}>
						<img src={chatSVG} alt={chatSVG} />
						<p>{comments.length} Comments</p>
					</SmallStyledReactDomLink>
					<SmallEmptyButton onClick={() => likePost()}>
						{voteNumber}
						{userLiked ? <FullHeart /> : <EmptyHeart />}
					</SmallEmptyButton>
				</PostButtonDiv>
			</PostBottomDiv>
		</PostContainer>
	);
}

export default PostModule;
