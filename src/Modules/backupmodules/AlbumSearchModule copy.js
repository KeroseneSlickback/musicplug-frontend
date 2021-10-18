import React, { useState, useEffect, useCallback } from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	DropDownAlbumDiv,
	DropDownAlbumSingle,
	DropDownAlbumSelect,
} from '../../Components/Forms';
import useSpotifyDebounceFetch from '../../Utilities/Hooks/useSpotifyDebounceFetch';
import useSpotifyGetAlbums from '../../Utilities/Hooks/useSpotifyGetAlbums';
import useSpotifyGetSingleAlbum from '../../Utilities/Hooks/useSpotifyGetSingleAlbum';
import StyledBrokenImage from '../Utilities/Images/svg/broken_image.svg';

// Later fixes:
// Clear results after clearing searchbar

function AlbumSearchModule(props) {
	const [albumSearchParams, setAlbumSearchParams] = useState({
		q: '',
		type: 'album',
		limit: 3,
	});
	const [autoAlbumSearchParams, setAutoAlbumSearchParams] = useState({
		artistId: '',
		params: {
			limit: 25,
		},
	});
	const [singleAlbumSearchParams, setSingleAlbumSearchParams] = useState({
		albumId: '',
	});
	const [albumSearch, setAlbumSearch] = useState('');
	const [album, setAlbum] = useState(null);
	const [searched, setSearched] = useState(false);

	// loading and error handling
	const { data } = useSpotifyDebounceFetch(albumSearchParams);
	const albumData = useSpotifyGetAlbums(autoAlbumSearchParams);
	const singleAlbumData = useSpotifyGetSingleAlbum(singleAlbumSearchParams);

	const selectDropDownAlbum = useCallback(
		album => {
			const albumImgUrl = album.images[1] ? album.images[1].url : '';
			setAlbum(prev => ({
				...prev,
				albumName: album.name,
				albumId: album.id,
				albumImgUrl,
				albumUrl: album.external_urls.spotify,
				artistId: album.artists[0].id,
			}));
			setSearched(true);
			setAlbumSearch(album.name);
			props.sendData({
				albumName: album.name,
				albumId: album.id,
				albumImgUrl,
				albumUrl: album.external_urls.spotify,
				artistId: album.artists[0].id,
			});
		},
		[props]
	);

	const updateAlbum = e => {
		setAlbumSearch(e.target.value);
		setSearched(false);
	};

	// Line 43:8:  The 'selectDropDownAlbum' function makes the dependencies of useEffect Hook (at line 77) change on every render. To fix this, wrap the definition of 'selectDropDownAlbum' in its own useCallback() Hook  react-hooks/exhaustive-deps

	// Also, some weird issue with albumsId not updating--maybe from either track or album section?

	// What about the selectDropDownTrack function causes render?
	// Should the whole, or part of it be memoized?

	useEffect(() => {
		if (
			singleAlbumData.data.status === 200 &&
			singleAlbumData.load === false &&
			searched === false
		) {
			selectDropDownAlbum(singleAlbumData.data.data);
		}
	}, [singleAlbumData, searched, selectDropDownAlbum]);

	useEffect(() => {
		if (albumSearch === '') {
			setSearched(false);
			return;
		} else if (albumSearch !== '' && searched) {
			return;
		} else {
			setAlbumSearchParams(prev => ({
				...prev,
				q: `album:${albumSearch}`,
			}));
		}
	}, [albumSearch, searched]);

	const clearStates = useCallback(() => {
		setAlbumSearchParams({
			q: '',
			type: 'album',
			limit: 3,
		});
		setSingleAlbumSearchParams({
			albumId: '',
		});
		setAlbumSearch('');
		setAlbum(null);
		setSearched(false);
		setAutoAlbumSearchParams({
			artistId: '',
			params: {
				limit: 25,
			},
		});
	}, []);

	// some complication with recieving updates from props and referencing state
	// Perhaps directly

	useEffect(() => {
		console.log('GIVEN ALBUMID:', props.albumId);
		if (props.artistId === null) {
			return;
		} else {
			if (album === null) {
				console.log('No saved album');
				if (props.albumId !== null) {
					console.log('Album prop given');
					clearStates();
					setSingleAlbumSearchParams(prev => ({
						albumId: props.albumId,
					}));
				} else {
					console.log(
						'Album prop NOT given, running auto search from artistID'
					);
					clearStates();
					setAutoAlbumSearchParams(prev => ({
						...prev,
						artistId: props.artistId,
					}));
				}
			} else if (album !== null) {
				console.log('There is a saved album');
				console.log('CURRENT SAVED ALBUM:', album.albumId);
				if (album.albumId !== props.albumId) {
					console.log('They dont match! Run single album search!');
					clearStates();
					setSingleAlbumSearchParams(prev => ({
						albumId: props.albumId,
					}));
				} else {
					console.log('But they match, so nothing happens');
					return;
				}
			}
		}
	}, [props.artistId, props.albumId, album, clearStates]);

	return (
		<FormBlock>
			<PostLabel htmlFor="album">Search for album:</PostLabel>
			<PostInput
				name="album"
				type="text"
				value={albumSearch}
				onChange={updateAlbum}
				placeholder="Dark Side of the Moon..."
			></PostInput>

			{searched ? (
				<DropDownAlbumDiv>
					<DropDownAlbumSingle>
						<img
							src={
								album.albumImgUrl !== '' ? album.albumImgUrl : StyledBrokenImage
							}
							alt={album.albumName}
						/>
						<p>{album.albumName}</p>
					</DropDownAlbumSingle>
				</DropDownAlbumDiv>
			) : data.data !== undefined ? (
				<DropDownAlbumDiv>
					{data.data.albums?.items.map(album => {
						return (
							<DropDownAlbumSelect
								onClick={() => selectDropDownAlbum(album)}
								key={album.id}
							>
								<img
									src={
										album.images[1] ? album.images[1].url : StyledBrokenImage
									}
									alt={album.name}
								/>
								<p>{album.name}</p>
							</DropDownAlbumSelect>
						);
					})}
				</DropDownAlbumDiv>
			) : data.data === undefined && albumData.data.status === 200 ? (
				<DropDownAlbumDiv>
					{albumData.data.data?.items.map(album => {
						return (
							<DropDownAlbumSelect
								onClick={() => selectDropDownAlbum(album)}
								key={album.id}
							>
								<img
									src={
										album.images[1] ? album.images[1].url : StyledBrokenImage
									}
									alt={album.name}
								/>
								<p>{album.name}</p>
							</DropDownAlbumSelect>
						);
					})}
				</DropDownAlbumDiv>
			) : null}
		</FormBlock>
	);
}

export default AlbumSearchModule;
