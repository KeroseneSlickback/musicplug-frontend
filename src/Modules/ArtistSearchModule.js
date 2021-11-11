import React from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	DropDownArtist,
	DropDownArtistSelect,
	CenteredModuleDiv,
} from '../Components/Forms';
import StyledBrokenImage from '../Utilities/Images/svg/broken_image.svg';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';
import WarningModule from './WarningModule';
import RegularMessageModule from './RegularMessageModule';

function ArtistSearchModule({
	selectedData,
	artistState,
	artistSearched,
	onChange,
	artistSearchData,
	artistSearchLoad,
	artistSearchError,
	singleArtistLoad,
	singleArtistError,
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
			{artistSearchLoad || singleArtistLoad ? (
				<CenteredModuleDiv fade>
					<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
				</CenteredModuleDiv>
			) : artistSearchError || singleArtistError ? (
				<CenteredModuleDiv>
					<WarningModule string="An error has occured, please refresh and try again." />
				</CenteredModuleDiv>
			) : artistSearched ? (
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
				artistSearchData.data.artists.items.length === 0 ? (
					<RegularMessageModule string="No Artists Found." />
				) : (
					<div>
						{artistSearchData.data.artists?.items.map(artist => {
							return (
								<DropDownArtistSelect
									onClick={() => onSelect(artist)}
									key={artist.id}
								>
									<img
										src={
											artist.images[1]
												? artist.images[1].url
												: StyledBrokenImage
										}
										alt={artist.name}
									/>
									<p>{artist.name}</p>
								</DropDownArtistSelect>
							);
						})}
					</div>
				)
			) : artistState === '' ? null : null}
			{}
		</FormBlock>
	);
}

export default ArtistSearchModule;
