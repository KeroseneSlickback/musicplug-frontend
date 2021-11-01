import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SmallEmptyButton, WideStyledButton } from '../Components/Buttons';
import {
	PostBottomDiv,
	PostButtonDiv,
	PostBodyContainer,
	PostBodyH1,
	PostBodyImgDiv,
	PostBodyInfoContainer,
	PostBodyP,
	PostBodyTextDiv,
	PostBodyImg,
	PostBodyInfoLabelP,
	PostBodyInfoP,
	PostBodyInfoMiniDiv,
	PostBodyButtonDiv,
	PostBodyTextInnerDiv,
} from '../Components/PostComponents';

import { FullHeart } from '../Utilities/Images/StyledSVG/FullHeart.js';
import { EmptyHeart } from '../Utilities/Images/StyledSVG/EmptyHeart.js';

import miniSpotify from '../Utilities/Images/svg/miniSpotify.svg';

function PostBodyInfoModule(props) {
	const { genre } = props.data;
	const [formattedGenre, setFormattedGenre] = useState({
		genre: '',
		path: '/',
	});
	const {
		artistName,
		artistImgUrl,
		albumName,
		albumImgUrl,
		trackName,
		trackUrl,
	} = props.data.recommendation;

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
	return (
		<PostBodyInfoContainer>
			<PostBodyImgDiv>
				<PostBodyImg src={artistImgUrl} alt={artistName}></PostBodyImg>
				<PostBodyImg src={albumImgUrl} alt={albumName}></PostBodyImg>
			</PostBodyImgDiv>
			<PostBodyInfoMiniDiv>
				<PostBodyInfoLabelP>Artist</PostBodyInfoLabelP>
				<PostBodyInfoP>{artistName}</PostBodyInfoP>
			</PostBodyInfoMiniDiv>
			<PostBodyInfoMiniDiv>
				<PostBodyInfoLabelP>Album</PostBodyInfoLabelP>
				<PostBodyInfoP>{albumName}</PostBodyInfoP>
			</PostBodyInfoMiniDiv>
			<PostBodyInfoMiniDiv>
				<PostBodyInfoLabelP>Song</PostBodyInfoLabelP>
				<PostBodyInfoP>{trackName}</PostBodyInfoP>
			</PostBodyInfoMiniDiv>
			<PostBodyInfoMiniDiv>
				<PostBodyInfoLabelP>Genre</PostBodyInfoLabelP>
				<PostBodyInfoP>{formattedGenre.genre}</PostBodyInfoP>
			</PostBodyInfoMiniDiv>
			<PostBodyButtonDiv>
				<WideStyledButton href={trackUrl} target="_blank" rel="noreferrer">
					Listen on Spotify <img src={miniSpotify} alt="headphones" />
				</WideStyledButton>
			</PostBodyButtonDiv>
		</PostBodyInfoContainer>
	);
}

export default PostBodyInfoModule;
