import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import ArtistSearchModule from '../Modules/ArtistSearchModule';

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

function NewPost() {
	const history = useHistory();
	const { loggedIn, spotifyVer } = useContext(AuthContext);
	// const [playlistSelect, setPlaylistSelect] = useState(false);
	const { userRefreshed } = useSpotifyRefresh();
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
		artistImgUrl: '',
		artistUrl: '',
		albumName: '',
		albumId: '',
		albumImgUrl: '',
		albumUrl: '',
		trackName: '',
		trackId: '',
		trackImgUrl: '',
		trackUrl: '',
	});

	function handlePostChange(e) {
		const { name, value } = e.target;
		setPostData(prevState => ({
			...prevState,
			[name]: value,
		}));
	}

	function recieveData(data) {
		console.log(data);
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
					<ArtistSearchModule sendData={recieveData} />
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
