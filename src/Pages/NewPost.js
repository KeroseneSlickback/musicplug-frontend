import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import ArtistSearchModule from '../Modules/ArtistSearchModule';
import AlbumSearchModule from '../Modules/AlbumSearchModule';
import TrackSearchModule from '../Modules/TrackSearchModule';

import { MediumStyledButton, SpotifyButton } from '../Components/Buttons';
import {
	StylePageContainer,
	PageInfoContainer,
} from '../Components/Containers';
import AuthContext from '../Utilities/AuthContext';

import spotifySVG from './../Utilities/Images/svg/spotify.svg';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';

import {
	FormContainer,
	Form,
	FormBlock,
	PostLabel,
	PostInput,
	PostTextArea,
	PostSelect,
	CenteredModuleDiv,
	FormH1,
	// PostInputRadioDiv,
	// PostInputRadio,
} from '../Components/Forms';
import useSpotifyRefresh from '../Utilities/Hooks/useSpotifyRefresh';
import useSpotifyDebounceFetch from '../Utilities/Hooks/useSpotifyDebounceFetch';
import useSpotifyGetAlbums from '../Utilities/Hooks/useSpotifyGetAlbums';
import useSpotifyGetTracks from '../Utilities/Hooks/useSpotifyGetTracks';
import useSpotifyGetSingleAlbum from '../Utilities/Hooks/useSpotifyGetSingleAlbum';
import useSpotifyGetSingleArtist from '../Utilities/Hooks/useSpotifyGetSingleArtist';

function NewPost() {
	const history = useHistory();
	const { loggedIn, spotifyVer } = useContext(AuthContext);
	const { userRefreshed } = useSpotifyRefresh();
	const [postData, setPostData] = useState({
		title: '',
		body: '',
		genre: '',
	});
	const [selectedData, setSelectedData] = useState({
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

	function handleSubmit(e) {
		e.preventDefault();
		const jwt = localStorage.getItem('jwt');
		const requestBody = { ...postData, recommendation: selectedData };
		axios
			.post('http://localhost:8888/posts', requestBody, {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.then(res => {
				history.push('/');
			})
			.catch(err => {
				console.log(err);
			});
		e.target.reset(); // Upon success, redirect to post with post#
	}

	// Searching functions

	// Free-form search
	const [artistSearchParams, setArtistSearchParams] = useState({
		q: '',
		type: 'artist',
		limit: 3,
	});
	const {
		data: artistSearchData,
		load: artistSearchLoad,
		error: artistSearchError,
	} = useSpotifyDebounceFetch(artistSearchParams);

	const [albumSearchParams, setAlbumSearchParams] = useState({
		q: '',
		type: 'album',
		limit: 3,
	});
	const {
		data: albumSearchData,
		load: albumSearchLoad,
		error: albumSearchError,
	} = useSpotifyDebounceFetch(albumSearchParams);

	const [trackSearchParams, setTrackSearchParams] = useState({
		q: '',
		type: 'track',
		limit: 6,
	});
	const {
		data: trackSearchData,
		load: trackSearchLoad,
		error: trackSearchError,
	} = useSpotifyDebounceFetch(trackSearchParams);

	// By handed down ID
	// Artist not yet made
	const [autoAlbumSearchParams, setAutoAlbumSearchParams] = useState({
		artistId: '',
		params: {
			limit: 30,
		},
	});
	const {
		data: autoAlbumData,
		load: autoAlbumLoad,
		error: autoAlbumError,
	} = useSpotifyGetAlbums(autoAlbumSearchParams);

	const [autoTrackSearchParams, setAutoTrackSearchParams] = useState({
		albumId: '',
		params: {
			limit: 40,
		},
	});
	const {
		data: autoTrackData,
		load: autoTrackLoad,
		error: autoTrackError,
	} = useSpotifyGetTracks(autoTrackSearchParams);

	// Single
	const [singleAlbumSearchParams, setSingleAlbumSearchParams] = useState({
		albumId: '',
	});
	const {
		data: singleAlbumData,
		load: singleAlbumLoad,
		error: singleAlbumError,
	} = useSpotifyGetSingleAlbum(singleAlbumSearchParams);

	const [singleArtistSearchParams, setSingleArtistSearchParams] = useState({
		artistId: '',
	});
	const {
		data: singleArtistData,
		load: singleArtistLoad,
		error: singleArtistError,
	} = useSpotifyGetSingleArtist(singleArtistSearchParams);

	// Module states
	const [artistState, setArtistState] = useState('');
	const [artistSearched, setArtistSearched] = useState(false);
	const handleArtistChange = e => {
		setArtistSearched(false);
		setArtistState(e.target.value);
		setArtistSearchParams(prev => ({
			...prev,
			q: e.target.value,
		}));
	};
	const [albumState, setAlbumState] = useState('');
	const [albumSearched, setAlbumSearched] = useState(false);
	const handleAlbumChange = e => {
		setAlbumSearched(false);
		setAlbumState(e.target.value);
		setAlbumSearchParams(prev => ({
			...prev,
			q: e.target.value,
		}));
	};
	const [trackState, setTrackState] = useState('');
	const [trackSearched, setTrackSearched] = useState(false);
	const handleTrackChange = e => {
		setTrackSearched(false);
		setTrackState(e.target.value);
		setTrackSearchParams(prev => ({
			...prev,
			q: e.target.value,
		}));
	};

	const onArtistSelect = artist => {
		const artistImgUrl = artist.images[1] ? artist.images[1].url : '';
		setArtistSearched(true);
		setArtistState(artist.name);
		setAlbumState('');
		setAlbumSearched(false);
		setTrackState('');
		setTrackSearched(false);
		setAlbumSearchParams({
			q: '',
			type: 'album',
			limit: 3,
		});
		setSelectedData(prev => ({
			...prev,
			artistName: artist.name,
			artistId: artist.id,
			artistImgUrl,
			artistUrl: artist.external_urls.spotify,
		}));
	};
	const onAlbumSelect = album => {
		const albumImgUrl = album.images[1] ? album.images[1].url : '';
		setAlbumSearched(true);
		setAlbumState(album.name);

		if (selectedData.artistId !== album.artists[0].id) {
			setSingleArtistSearchParams(prev => ({
				...prev,
				artistId: album.artists[0].id,
			}));
		}
		if (selectedData.albumId !== album.id) {
			setTrackSearchParams({
				q: '',
				type: 'track',
				limit: 6,
			});
			setAutoTrackSearchParams(prev => ({
				...prev,
				albumId: album.id,
				params: {
					limit: 40,
				},
			}));
		}
		setSelectedData(prev => ({
			...prev,
			albumName: album.name,
			albumId: album.id,
			albumImgUrl,
			albumUrl: album.external_urls.spotify,
		}));
	};
	const onTrackSelect = track => {
		const albumId = track.album ? track.album.id : selectedData.albumId;
		const artistId = track.artists[0].id;
		const trackImgUrl = track.album
			? track.album.images[2].url
			: selectedData.albumImgUrl;

		setTrackSearched(true);
		setTrackState(track.name);
		if (
			selectedData.artistId !== artistId ||
			selectedData.albumId !== albumId
		) {
			setSelectedData(prev => ({
				...prev,
				trackName: track.name,
				trackId: track.id,
				trackImgUrl,
				trackUrl: track.external_urls.spotify,
			}));
			setSingleAlbumSearchParams(prev => ({
				...prev,
				albumId: albumId,
			}));
			setSingleArtistSearchParams(prev => ({
				...prev,
				artistId: artistId,
			}));
		} else {
			setSelectedData(prev => ({
				...prev,
				trackName: track.name,
				trackId: track.id,
				trackImgUrl,
				trackUrl: track.external_urls.spotify,
			}));
		}
	};

	useEffect(() => {
		if (albumSearched) {
			return;
		} else {
			setAutoAlbumSearchParams(prev => ({
				...prev,
				artistId: selectedData.artistId,
				params: {
					limit: 30,
				},
			}));
		}
	}, [selectedData.artistId, albumSearched]);

	useEffect(() => {
		if (trackSearched) {
			return;
		} else {
			setAutoTrackSearchParams(prev => ({
				...prev,
				albumId: selectedData.albumId,
				params: {
					limit: 40,
				},
			}));
		}
	}, [selectedData.albumId, trackSearched]);

	useEffect(() => {
		if (singleAlbumData.status === 200) {
			setSelectedData(prev => ({
				...prev,
				albumId: singleAlbumData.data.id,
				albumImgUrl: singleAlbumData.data.images[1].url,
				albumName: singleAlbumData.data.name,
				albumUrl: singleAlbumData.data.external_urls.spotify,
			}));
			setAlbumSearched(true);
			setAlbumState(singleAlbumData.data.name);
		}
	}, [singleAlbumData]);

	useEffect(() => {
		if (singleArtistData.status === 200) {
			setSelectedData(prev => ({
				...prev,
				artistId: singleArtistData.data.id,
				artistImgUrl: singleArtistData.data.images[1].url,
				artistName: singleArtistData.data.name,
				artistUrl: singleArtistData.data.external_urls.spotify,
			}));
			setArtistSearched(true);
			setArtistState(singleArtistData.data.name);
		}
	}, [singleArtistData]);

	useEffect(() => {
		if (autoTrackData.status === 200) {
			setTrackSearched(false);
			setTrackState('');
		}
	}, [autoTrackData]);

	return (
		<StylePageContainer>
			{loggedIn === false ? (
				<PageInfoContainer>
					<FormH1>Please Register or Login to create a new post.</FormH1>
				</PageInfoContainer>
			) : spotifyVer === false ? (
				<FormContainer>
					<FormBlock spotify>
						<h3>
							Please verify your account with Spotify before making a new post.
						</h3>
						<SpotifyButton href="http://localhost:8888/login">
							<img src={spotifySVG} alt="spotifySVG" />
						</SpotifyButton>
					</FormBlock>
				</FormContainer>
			) : userRefreshed === true ? (
				<FormContainer>
					<FormH1>New Post</FormH1>
					<h3>
						Please recommend an artist, album, song, or any combination you wish
						from Spotify!
					</h3>

					<ArtistSearchModule
						selectedData={selectedData}
						artistState={artistState}
						artistSearched={artistSearched}
						onChange={handleArtistChange}
						artistSearchData={artistSearchData}
						artistSearchLoad={artistSearchLoad}
						artistSearchError={artistSearchError}
						singleArtistLoad={singleArtistLoad}
						singleArtistError={singleArtistError}
						onSelect={onArtistSelect}
					/>

					<AlbumSearchModule
						selectedData={selectedData}
						albumState={albumState}
						albumSearched={albumSearched}
						onChange={handleAlbumChange}
						albumSearchData={albumSearchData}
						albumSearchLoad={albumSearchLoad}
						albumSearchError={albumSearchError}
						autoAlbumData={autoAlbumData}
						autoAlbumLoad={autoAlbumLoad}
						autoAlbumError={autoAlbumError}
						singleAlbumLoad={singleAlbumLoad}
						singleAlbumError={singleAlbumError}
						onSelect={onAlbumSelect}
					/>

					<TrackSearchModule
						selectedData={selectedData}
						trackState={trackState}
						trackSearched={trackSearched}
						onChange={handleTrackChange}
						trackSearchData={trackSearchData}
						trackSearchLoad={trackSearchLoad}
						trackSearchError={trackSearchError}
						autoTrackData={autoTrackData}
						autoTrackLoad={autoTrackLoad}
						autoTrackError={autoTrackError}
						onSelect={onTrackSelect}
					/>

					{/* <FormBlock>
						<PostLabel>Select an Image for the Post:</PostLabel>
						<PostInputRadioDiv>
							<PostInputRadio
								type="radio"
								name="image"
								required
							></PostInputRadio>
							<PostInputRadio
								type="radio"
								name="image"
								required
							></PostInputRadio>
							<PostInputRadio
								type="radio"
								name="image"
								required
							></PostInputRadio>
						</PostInputRadioDiv>
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
								name="body"
								cols="50"
								rows="15"
								placeholder="This time when I was searching bandcamp, I came across this artist..."
								value={postData.body}
								onChange={handlePostChange}
								required
							></PostTextArea>
						</FormBlock>
						<MediumStyledButton bottom>Submit New Post</MediumStyledButton>
					</Form>
				</FormContainer>
			) : (
				<FormContainer>
					<CenteredModuleDiv fade>
						<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
					</CenteredModuleDiv>
				</FormContainer>
			)}
		</StylePageContainer>
	);
}

export default NewPost;
