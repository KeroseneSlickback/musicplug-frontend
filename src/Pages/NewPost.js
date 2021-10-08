import React, { useState, useContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import ArtistSearch from '../Modules/ArtistSearch';

import { MediumStyledButton } from '../Components/Buttons';
import { PageContainer, PageInfoContainer } from '../Components/Containers';
import AuthContext from '../Utilities/AuthContext';

import spotifySVG from './../Utilities/Images/svg/spotify.svg';

import {
	FormContainer,
	Form,
	FormBlock,
	PostLabel,
	PostInput,
	PostTextArea,
	PostSelect,
} from '../Components/Forms';
import useSpotifyRefresh from '../Utilities/Hooks/useSpotifyRefresh';
import useSpotifyDebounceFetch from '../Utilities/Hooks/useSpotifyDebounceFetch';

function searchParamsReducer(state, action) {
	switch (action.type) {
		case 'artist': {
			return {
				...state,
				q: `artist:${action.payload}`,
				type: action.type,
			};
		}
		case 'album': {
			return {
				...state,
				q: `album:${action.payload}`,
				type: action.type,
			};
		}
		case 'track': {
			return {
				...state,
				q: `track:${action.payload}`,
				type: action.type,
				limit: 30,
			};
		}
		case 'playlist': {
			return {
				...state,
				q: `playlist:${action.payload}`,
				type: action.type,
				limit: 20,
			};
		}
		default:
			throw new Error();
	}
}

const initialSearchState = {
	q: '',
	type: '',
	limit: 3,
};

function NewPost() {
	const history = useHistory();
	const { loggedIn, spotifyVer } = useContext(AuthContext);
	// const [playlistSelect, setPlaylistSelect] = useState(false);
	const { userRefreshed, freshAccessToken } = useSpotifyRefresh();
	const [postData, setPostData] = useState({
		title: '',
		text: '',
		genre: '',
		artist: '',
		image: '',
		recommended: '',
	});
	const [searchData, setSearchData] = useState({
		artistName: '',
		artistId: '',
		artistImgURL: '',
		albumName: '',
		albumId: '',
		albumImgURL: '',
		trackName: '',
		trackId: '',
		trackImgURL: '',
	});

	const [artistSearchParams, setArtistSearchParams] = useReducer(
		searchParamsReducer,
		initialSearchState
	);

	const artistFetched = useSpotifyDebounceFetch(artistSearchParams);

	function handlePostChange(e) {
		const { name, value } = e.target;
		setPostData(prevState => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		// make post request
		const jwt = localStorage.getItem('jwt');
		axios
			.post('http://localhost:8888/posts', postData, {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.then(res => {
				console.log(res);
				setPostData({
					title: '',
					text: '',
					genre: '',
					artist: '',
					image: '',
					recommended: '',
				});
				history.push('/');
			})
			.catch(err => {
				console.log(err);
			});
		e.target.reset(); // Upon success, redirect to post with post#
	}

	// const songSearch = () => {
	// 	const access_token = localStorage.getItem('spotify_access');
	// 	const headers = {
	// 		Authorization: `Bearer ${access_token}`,
	// 	};
	// 	const params = {
	// 		q: 'friday',
	// 		type: 'track',
	// 		limit: 3,
	// 	};
	// 	axios
	// 		.get('https://api.spotify.com/v1/search', { headers, params })
	// 		.then(res => console.log(res))
	// 		.catch(err => console.log(err));
	// };

	// const refinedSearch = () => {
	// 	const access_token = localStorage.getItem('spotify_access');
	// 	const headers = {
	// 		Authorization: `Bearer ${access_token}`,
	// 	};

	// 	const artistSearch = 'Def Leppard';
	// 	const albumSearch = '';
	// 	const songSearch = 'Photograph';

	// 	const params = {
	// 		q: `${artistSearch !== '' ? `artist:${artistSearch}` : ''}
	// 				${albumSearch !== '' ? `album:${albumSearch}` : ''}
	// 				${songSearch !== '' ? `track:${songSearch}` : ''}`,
	// 		type: 'track',
	// 		limit: 3,
	// 	};
	// 	axios
	// 		.get('https://api.spotify.com/v1/search', { headers, params })
	// 		.then(res => console.log(res))
	// 		.catch(err => console.log(err));
	// };

	return (
		<PageContainer>
			{loggedIn === false ? (
				<PageInfoContainer>
					<h1>Please Register or Login to create a new post.</h1>
				</PageInfoContainer>
			) : spotifyVer === false ? (
				<FormContainer>
					<FormBlock spotify>
						<h3>
							Please verify your account with Spotify before making a new post.
						</h3>
						<a href="http://localhost:8888/login">
							<img src={spotifySVG} alt="spotifySVG" />
						</a>
					</FormBlock>
				</FormContainer>
			) : userRefreshed === true ? (
				<FormContainer>
					<h1>New Post</h1>
					<h3>
						First start by searching Spotify. You can refine your options as you
						search.
					</h3>
					<FormBlock>
						<PostLabel htmlFor="artist">Search for Artist:</PostLabel>
						<PostInput
							name="artist"
							type="text"
							value={artistSearchParams.artist}
							onChange={e =>
								setArtistSearchParams({
									type: e.target.name,
									payload: e.target.value,
								})
							}
							placeholder="Tom Petty..."
						></PostInput>
						<ArtistSearch></ArtistSearch>
					</FormBlock>
					{/* <FormBlock>
						<PostLabel htmlFor="album">Search for Album:</PostLabel>
						<PostInput
							name="album"
							type="text"
							value={searchParams.album}
							onChange={e =>
								setSearchParams({
									type: e.target.name,
									payload: e.target.value,
								})
							}
							placeholder="Dark Side of the Moon..."
						></PostInput>
					</FormBlock>
					<FormBlock>
						<PostLabel htmlFor="track">Search for Song:</PostLabel>
						<PostInput
							name="track"
							type="text"
							value={searchParams.track}
							onChange={e =>
								setSearchParams({
									type: e.target.name,
									payload: e.target.value,
								})
							}
							placeholder="Lose Yourself..."
						></PostInput>
					</FormBlock>
					<FormBlock>
						<PostLabel htmlFor="playlist">Search for Playlist:</PostLabel>
						<PostInput
							name="playlist"
							type="text"
							value={searchParams.playlist}
							onChange={e =>
								setSearchParams({
									type: e.target.name,
									payload: e.target.value,
								})
							}
							placeholder="Best of Rock 1982..."
						></PostInput>
					</FormBlock> */}
					<FormBlock>
						<PostLabel htmlFor="genre">Genre:</PostLabel>
						<PostSelect
							className="genreSelect"
							name="genre"
							value={postData.genre}
							onChange={handlePostChange}
							required
						>
							<option value="" disabled>
								Select a genre
							</option>
							<option value="pop">Pop</option>
							<option value="hiphop">Hip-Hop</option>
							<option value="rock">Rock</option>
							<option value="country">Country</option>
							<option value="electronic">Electronic</option>
							<option value="bluesjazz">Blues/Jazz</option>
							<option value="classical">Classical</option>
							<option value="funkrb">Funk/R&B</option>
						</PostSelect>
					</FormBlock>
					<Form onSubmit={handleSubmit}>
						<FormBlock>
							<PostLabel htmlFor="title">Post Title:</PostLabel>
							<PostInput
								name="title"
								type="text"
								value={postData.title}
								onChange={handlePostChange}
								placeholder="I really really really like this..."
								required
							/>
						</FormBlock>
						<FormBlock>
							<PostLabel htmlFor="text">Explain your recommendation:</PostLabel>
							<PostTextArea
								name="text"
								cols="50"
								rows="15"
								placeholder="This time when I was searching bandcamp, I came across this artist..."
								value={postData.text}
								onChange={handlePostChange}
								required
							></PostTextArea>
						</FormBlock>

						{/* <FormBlock>
							<PostLabel htmlFor="artist">Artist/Band:</PostLabel>
							<PostInput
								name="artist"
								type="text"
								placeholder="Daft Punk"
								value={postData.artist}
								onChange={handlePostChange}
								required
							/>
						</FormBlock>
						<FormBlock>
							<PostLabel htmlFor="image">Artist/Band image (URL):</PostLabel>
							<PostInput
								name="image"
								type="url"
								value={postData.image}
								onChange={handlePostChange}
								placeholder="https://bandimage..."
								pattern="https://.*"
								required
							/>
						</FormBlock>
						<FormBlock>
							<PostLabel>Recommended Youtube Link:</PostLabel>
							<PostInput
								name="recommended"
								type="url"
								value={postData.recommended}
								onChange={handleChange}
								placeholder="https://youtube.com..."
								pattern="https://.*"
								required
							/>
						</FormBlock> */}
						<MediumStyledButton bottom>Submit New Post</MediumStyledButton>
					</Form>
				</FormContainer>
			) : (
				<FormContainer>
					<h1>Loading...</h1>
				</FormContainer>
			)}
		</PageContainer>
	);
}

export default NewPost;
