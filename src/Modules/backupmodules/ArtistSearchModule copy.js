import React, { useState, useEffect } from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	DropDownArtist,
	DropDownArtistSelect,
} from '../Components/Forms';
import useSpotifyDebounceFetch from '../Utilities/Hooks/useSpotifyDebounceFetch';
import StyledBrokenImage from '../Utilities/Images/svg/broken_image.svg';

// Later fixes:
// Clear results after clearing searchbar

function ArtistSearchModule(props) {
	const [artistSearchParams, setArtistSearchParams] = useState({
		q: '',
		type: 'artist',
		limit: 3,
	});
	const [artistSearch, setArtistSearch] = useState('');
	const [artist, setartist] = useState(null);
	const [searched, setSearched] = useState(false);

	// loading and error handling
	const { data } = useSpotifyDebounceFetch(artistSearchParams);

	const selectDropDownArtist = artist => {
		const artistImgUrl = artist.images[1] ? artist.images[1].url : '';
		setartist(prev => ({
			...prev,
			artistName: artist.name,
			artistId: artist.id,
			artistImgUrl,
			artistUrl: artist.external_urls.spotify,
		}));
		setSearched(true);
		setArtistSearch(artist.name);
		props.sendData({
			artistName: artist.name,
			artistId: artist.id,
			artistImgUrl,
			artistUrl: artist.external_urls.spotify,
		});
	};

	const updateArtist = e => {
		setArtistSearch(e.target.value);
		setSearched(false);
	};

	useEffect(() => {
		if (artistSearch === '') {
			setSearched(false);
			return;
		} else if (searched) {
			return;
		} else {
			setArtistSearchParams(prev => ({
				...prev,
				q: `artist:${artistSearch}`,
			}));
		}
	}, [artistSearch, searched]);

	return (
		<FormBlock>
			<PostLabel htmlFor="artist">Search for Artist:</PostLabel>
			<PostInput
				name="artist"
				type="text"
				value={artistSearch}
				onChange={updateArtist}
				placeholder="Tom Petty..."
			></PostInput>
			{searched ? (
				<DropDownArtist>
					<img
						src={
							artist.artistImgUrl !== ''
								? artist.artistImgUrl
								: StyledBrokenImage
						}
						alt={artist.artistName}
					/>
					<p>{artist.artistName}</p>
				</DropDownArtist>
			) : data.data ? (
				<div>
					{data.data.artists?.items.map(artist => {
						return (
							<DropDownArtistSelect
								onClick={() => selectDropDownArtist(artist)}
								key={artist.id}
							>
								<img
									src={
										artist.images[1] ? artist.images[1].url : StyledBrokenImage
									}
									alt={artist.name}
								/>
								<p>{artist.name}</p>
							</DropDownArtistSelect>
						);
					})}
				</div>
			) : null}
			{}
		</FormBlock>
	);
}

export default ArtistSearchModule;
