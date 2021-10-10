import React, { useState, useEffect } from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	DropDownAlbumDiv,
	DropDownAlbumSingle,
	DropDownAlbumSelect,
} from '../Components/Forms';
import useSpotifyDebounceFetch from '../Utilities/Hooks/useSpotifyDebounceFetch';
import useSpotifyGetAlbums from '../Utilities/Hooks/useSpotifyGetAlbums';
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
		albumId: '',
		params: {
			limit: 25,
		},
	});
	const [albumSearch, setAlbumSearch] = useState('');
	const [album, setAlbum] = useState(null);
	const [searched, setSearched] = useState(false);

	// loading and error handling
	const { data } = useSpotifyDebounceFetch(albumSearchParams);
	const albumData = useSpotifyGetAlbums(autoAlbumSearchParams);

	const selectDropDownAlbum = album => {
		const albumImgUrl = album.images[1] ? album.images[1].url : '';
		setAlbum(prev => ({
			...prev,
			albumName: album.name,
			albumId: album.id,
			albumImgUrl,
			albumUrl: album.external_urls.spotify,
		}));
		setSearched(true);
		setAlbumSearch(album.name);
		props.sendData({
			albumName: album.name,
			albumId: album.id,
			albumImgUrl,
			albumUrl: album.external_urls.spotify,
		});
	};

	const updateAlbum = e => {
		setAlbumSearch(e.target.value);
		setSearched(false);
	};

	useEffect(() => {
		if (albumSearch === '') {
			setSearched(false);
			return;
		} else if (searched) {
			return;
		} else {
			setAlbumSearchParams(prev => ({
				...prev,
				q: `album:${albumSearch}`,
			}));
		}
	}, [albumSearch, searched]);

	useEffect(() => {
		if (props.artistId === null) {
			return;
		} else {
			setAlbumSearchParams({
				q: '',
				type: 'album',
				limit: 3,
			});
			setAlbumSearch('');
			setAlbum(null);
			setSearched(false);
			setAutoAlbumSearchParams(prev => ({
				...prev,
				albumId: props.artistId,
			}));
		}
	}, [props.artistId]);

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
			{}
		</FormBlock>
	);
}

export default AlbumSearchModule;
