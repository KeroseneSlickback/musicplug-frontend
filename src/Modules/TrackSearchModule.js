import React, { useState, useEffect } from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	DropDownTrackDiv,
	DropDownTrackSingle,
	DropDownTrackSelect,
} from '../Components/Forms';
import useSpotifyDebounceFetch from '../Utilities/Hooks/useSpotifyDebounceFetch';
import useSpotifyGetTracks from '../Utilities/Hooks/useSpotifyGetTracks';
import StyledBrokenImage from '../Utilities/Images/svg/broken_image.svg';

// Later fixes:
// Clear results after clearing searchbar

function TrackSearchModule(props) {
	const [trackSearchParams, setTrackSearchParams] = useState({
		q: '',
		type: 'track',
		limit: 3,
	});
	const [autoTrackSearchParams, setAutoTrackSearchParams] = useState({
		albumId: '',
		params: {
			limit: 40,
		},
	});
	const [trackSearch, setTrackSearch] = useState('');
	const [track, setTrack] = useState(null);
	const [searched, setSearched] = useState(false);
	const [savedAlbumImgUrl, setSavedAlbumUrl] = useState('');

	// loading and error handling
	const { data } = useSpotifyDebounceFetch(trackSearchParams);
	const trackData = useSpotifyGetTracks(autoTrackSearchParams);

	const selectDropDownTrack = track => {
		const albumId = track.album ? track.album.id : '';
		const artistId = track.artists[0].id;

		console.log(track);
		const trackImgUrl = track.album
			? track.album.images[2].url
			: savedAlbumImgUrl;
		setTrack(prev => ({
			...prev,
			trackName: track.name,
			trackId: track.id,
			trackImgUrl,
			trackUrl: track.external_urls.spotify,
			albumId,
			artistId,
		}));
		setSearched(true);
		setTrackSearch(track.name);
		props.sendData({
			trackName: track.name,
			trackId: track.id,
			trackImgUrl,
			trackUrl: track.external_urls.spotify,
			albumId,
			artistId,
		});
	};

	const updateTrack = e => {
		setTrackSearch(e.target.value);
		setSearched(false);
	};

	useEffect(() => {
		if (trackSearch === '') {
			setSearched(false);
			return;
		} else if (searched) {
			return;
		} else {
			setTrackSearchParams(prev => ({
				...prev,
				q: `track:${trackSearch}`,
			}));
		}
	}, [trackSearch, searched]);

	useEffect(() => {
		if (props.albumId === null) {
			return;
		} else {
			setTrackSearchParams({
				q: '',
				type: 'track',
				limit: 3,
			});
			setTrackSearch('');
			setTrack(null);
			setSearched(false);
			setAutoTrackSearchParams(prev => ({
				...prev,
				albumId: props.albumId,
			}));
			setSavedAlbumUrl(props.albumImg);
		}
	}, [props.albumId, props.albumImg]);

	return (
		<FormBlock>
			<PostLabel htmlFor="track">Search for song:</PostLabel>
			<PostInput
				name="track"
				type="text"
				value={trackSearch}
				onChange={updateTrack}
				placeholder="Interstate Love Song..."
			></PostInput>

			{searched ? (
				<DropDownTrackDiv>
					<DropDownTrackSingle>
						<img
							src={
								track.trackImgUrl !== '' ? track.trackImgUrl : savedAlbumImgUrl
							}
							alt={track.trackName}
						/>
						<p>{track.trackName}</p>
					</DropDownTrackSingle>
				</DropDownTrackDiv>
			) : data.data !== undefined ? (
				<DropDownTrackDiv>
					{data.data.tracks?.items.map(track => {
						return (
							<DropDownTrackSelect
								onClick={() => selectDropDownTrack(track)}
								key={track.id}
							>
								<img
									src={
										track.album.images[2]
											? track.album.images[2].url
											: StyledBrokenImage
									}
									alt={track.name}
								/>
								<p>{track.name}</p>
								<p>{track.album.name}</p>
								<p>{track.artists[0].name}</p>
							</DropDownTrackSelect>
						);
					})}
				</DropDownTrackDiv>
			) : data.data === undefined && trackData.data.status === 200 ? (
				<DropDownTrackDiv>
					{trackData.data.data?.items.map(track => {
						return (
							<DropDownTrackSelect
								onClick={() => selectDropDownTrack(track)}
								key={track.id}
							>
								<p>{track.track_number}</p>
								<p>{track.name}</p>
							</DropDownTrackSelect>
						);
					})}
				</DropDownTrackDiv>
			) : null}
		</FormBlock>
	);
}

export default TrackSearchModule;
