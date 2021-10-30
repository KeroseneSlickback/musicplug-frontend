import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
	LargeStyledButton,
	SmallButton,
	SmallEmptyButton,
	SpotifyButton,
} from '../Components/Buttons';
import { PostContainer } from '../Components/Containers';
import {
	DataInfoButtonContainer,
	DataInfoContainer,
	DataInfoLikeButtonContainer,
	PostBodyAlbumImg,
	PostBodyArtistImg,
	PostBodyDataContainer,
	PostBodyDataDiv,
	PostBodyH1,
	PostBodyImgDiv,
	PostBodyInfoDiv,
	PostBodyP,
	PostBodyTopDiv,
	PostBottomDiv,
	PostButtonDiv,
	PostCommentButton,
	PostImg,
	PostTopDiv,
	TextDiv,
} from '../Components/PostComponents';

import { FullHeart } from '../Utilities/Images/StyledSVG/FullHeart.js';
import { EmptyHeart } from '../Utilities/Images/StyledSVG/EmptyHeart.js';

import chatSVG from '../Utilities/Images/svg/forum_black_24dp.svg';
import headphoneSVG from '../Utilities/Images/svg/headphones_black_24dp.svg';
import spotify from '../Utilities/Images/svg/spotify.svg';

function PostBodyModule(props) {
	console.log(props.data);
	const { title, body, genre, comments, votes, owner, _id, likedUsers } =
		props.data;
	const [userLiked, setUserLiked] = useState(false);
	const [voteNumber, setVoteNumber] = useState(0);
	const [formattedBody, setFormattedBody] = useState('');
	const [formattedGenre, setFormattedGenre] = useState({
		genre: '',
		path: '/',
	});
	const {
		artistName,
		artistId,
		artistImgUrl,
		artistUrl,
		albumName,
		albumId,
		albumImgUrl,
		albumUrl,
		trackName,
		trackId,
		trackImgUrl,
		trackUrl,
	} = props.data.recommendation;

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
		const newBody = body.split('\n').map(str => <p>{str}</p>);
		setFormattedBody(newBody);
		console.log(newBody);
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
		<>
			<PostBodyTopDiv>
				<PostBodyInfoDiv>
					<PostBodyH1>{title}</PostBodyH1>
					<PostBodyP>{formattedBody}</PostBodyP>
				</PostBodyInfoDiv>

				<PostBodyDataContainer>
					<PostBodyImgDiv>
						<PostBodyArtistImg src={artistImgUrl} alt={artistName} />
						<PostBodyAlbumImg src={albumImgUrl} alt={albumName} />
					</PostBodyImgDiv>
					<PostBodyDataDiv>
						<DataInfoContainer>
							<div>
								<p>Artist/Band: </p>
								<strong>{artistName}</strong>
							</div>
							<div>
								<p>Album: </p>
								<strong>{albumName}</strong>
							</div>
							<div>
								<p>Song: </p>
								<strong>{trackName}</strong>
							</div>
							<div>
								<p>Genre: </p>
								<strong>{formattedGenre.genre}</strong>
							</div>
							<div>
								<p>Sumbited by:</p>
								<strong>{owner.username}</strong>
							</div>
						</DataInfoContainer>
						<DataInfoButtonContainer>
							<div>
								<p>Listen on Spotify: </p>
							</div>
							<SpotifyButton
								small
								href={trackUrl}
								target="_blank"
								rel="noreferrer"
							>
								<img src={spotify} alt="headphones" />
							</SpotifyButton>
						</DataInfoButtonContainer>
						<DataInfoLikeButtonContainer>
							<div>
								<p>Votes:</p>
							</div>
							<SmallEmptyButton body onClick={() => likePost()}>
								<p>{voteNumber}</p>
								{userLiked ? <FullHeart /> : <EmptyHeart />}
							</SmallEmptyButton>
						</DataInfoLikeButtonContainer>
					</PostBodyDataDiv>
				</PostBodyDataContainer>
			</PostBodyTopDiv>
		</>
	);
}

export default PostBodyModule;
