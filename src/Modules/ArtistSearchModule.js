import React from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	DropDownArtist,
	DropDownArtistSelect,
} from '../Components/Forms';
import StyledBrokenImage from '../Utilities/Images/svg/broken_image.svg';

function ArtistSearchModule({
	selectedData,
	artistState,
	artistSearched,
	onChange,
	artistSearchData,
	onSelect,
}) {
	return (
		<FormBlock>
			<PostLabel htmlFor="artist">Search for Artist:</PostLabel>
			<PostInput
				name="artist"
				type="text"
				value={artistState}
				onChange={e => {
					onChange(e);
				}}
				placeholder="Tom Petty..."
			></PostInput>
			{artistSearched ? (
				<DropDownArtist>
					<img
						src={
							selectedData.artistImgUrl !== ''
								? selectedData.artistImgUrl
								: StyledBrokenImage
						}
						alt={selectedData.artistName}
					/>
					<p>{selectedData.artistName}</p>
				</DropDownArtist>
			) : artistSearchData.data ? (
				<div>
					{artistSearchData.data.artists?.items.map(artist => {
						return (
							<DropDownArtistSelect
								onClick={() => onSelect(artist)}
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
			) : artistState === '' ? null : null}
			{}
		</FormBlock>
	);
}

export default ArtistSearchModule;
