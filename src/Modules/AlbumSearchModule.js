import React, { useState, useEffect, useCallback } from 'react';

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
import useSpotifyGetSingleAlbum from '../Utilities/Hooks/useSpotifyGetSingleAlbum';
import StyledBrokenImage from '../Utilities/Images/svg/broken_image.svg';

// Later fixes:
// Clear results after clearing searchbar

function AlbumSearchModule({
	selectedData,
	albumState,
	albumSearched,
	onChange,
	albumSearchData,
	autoAlbumData,
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

			{albumSearched ? (
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
			) : albumSearchData.data !== undefined ? (
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
