import React from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	DropDownAlbumDiv,
	DropDownAlbumSingle,
	DropDownAlbumSelect,
	CenteredModuleDiv,
} from '../Components/Forms';
import StyledBrokenImage from '../Utilities/Images/svg/broken_image.svg';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';

// Later fixes:
// Clear results after clearing searchbar

function AlbumSearchModule({
	selectedData,
	albumState,
	albumSearched,
	onChange,
	albumSearchData,
	albumSearchLoad,
	albumSearchError,
	autoAlbumData,
	autoAlbumLoad,
	autoAlbumError,
	singleAlbumLoad,
	singleAlbumError,
	onSelect,
}) {
	return (
		<FormBlock>
			<PostLabel htmlFor="album">Search for album:</PostLabel>
			<PostInput
				name="album"
				type="text"
				value={albumState}
				onChange={e => {
					onChange(e);
				}}
				placeholder="Dark Side of the Moon..."
			></PostInput>

			{albumSearchLoad || autoAlbumLoad || singleAlbumLoad ? (
				<CenteredModuleDiv fade>
					<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
				</CenteredModuleDiv>
			) : autoAlbumError || singleAlbumError || albumSearchError ? (
				<CenteredModuleDiv>
					<h2>An error has occured, please refresh page.</h2>
				</CenteredModuleDiv>
			) : albumSearched ? (
				<DropDownAlbumDiv>
					<DropDownAlbumSingle>
						<img
							src={
								selectedData.albumImgUrl !== ''
									? selectedData.albumImgUrl
									: StyledBrokenImage
							}
							alt={selectedData.albumName}
						/>
						<p>{selectedData.albumName}</p>
					</DropDownAlbumSingle>
				</DropDownAlbumDiv>
			) : albumSearchData.data ? (
				<DropDownAlbumDiv>
					{albumSearchData.data.albums?.items.map(album => {
						return (
							<DropDownAlbumSelect
								onClick={() => onSelect(album)}
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
			) : albumSearchData === '' && autoAlbumData.status === 200 ? (
				<DropDownAlbumDiv>
					{autoAlbumData.data?.items.map(album => {
						return (
							<DropDownAlbumSelect
								onClick={() => onSelect(album)}
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
			) : albumState === '' ? null : null}
		</FormBlock>
	);
}

export default AlbumSearchModule;
