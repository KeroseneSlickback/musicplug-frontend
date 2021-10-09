import React, { useState, useEffect } from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	FormDropDownDisplay,
	FormDropDownDiv,
} from '../Components/Forms';
import useSpotifyDebounceFetch from '../Utilities/Hooks/useSpotifyDebounceFetch';
import StyledBrokenImage from '../Utilities/Images/svg/broken_image.svg';

function ArtistSearchModule(props) {
	const [artistSearchParams, setArtistSearchParams] = useState({
		q: '',
		type: 'artist',
		limit: 3,
	});
	const [artistSearch, setArtistSearch] = useState('');
	const [selectedArtist, setSelectedArtist] = useState(null);
	const [searched, setSearched] = useState(false);

	// loading and error handling
	const { data } = useSpotifyDebounceFetch(artistSearchParams);

	const selectDropDownArtist = artist => {
		const artistImgUrl = artist.images[1] ? artist.images[1].url : '';
		setSelectedArtist(prev => ({
			...prev,
			artistName: artist.name,
			artistId: artist.id,
			artistImgUrl,
			artistUrl: artist.external_urls.spotify,
		}));
		setSearched(true);
		setArtistSearch(artist.name);
	};

	useEffect(() => {
		props.sendData(selectedArtist);
	}, [selectedArtist, props]);

	const updateArtist = e => {
		setArtistSearch(e.target.value);
		setSearched(false);
	};

	useEffect(() => {
		if (artistSearch === '') {
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
				<FormDropDownDisplay>
					<img
						src={
							selectedArtist.artistImgUrl !== ''
								? selectedArtist.artistImgUrl
								: StyledBrokenImage
						}
						alt={selectedArtist.artistName}
					/>
					<p>{selectedArtist.artistName}</p>
				</FormDropDownDisplay>
			) : data.data ? (
				<div>
					{data.data.artists?.items.map(artist => {
						return (
							<FormDropDownDiv
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
							</FormDropDownDiv>
						);
					})}
				</div>
			) : null}
			{}
		</FormBlock>
	);
}

export default ArtistSearchModule;
