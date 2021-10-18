import React, { useState, useEffect, useCallback } from 'react';

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

function TrackSearchModule({
	selectedData,
	trackState,
	trackSearched,
	onChange,
	trackSearchData,
	autoTrackData,
	onSelect,
}) {
	return (
		<FormBlock>
			<PostLabel htmlFor="track">Search for song:</PostLabel>
			<PostInput
				name="track"
				type="text"
				value={trackState}
				onChange={e => {
					onChange(e);
				}}
				placeholder="Interstate Love Song..."
			></PostInput>

			{trackSearched ? (
				<DropDownTrackDiv>
					<DropDownTrackSingle>
						<img
							src={
								selectedData.trackImgUrl !== ''
									? selectedData.trackImgUrl
									: StyledBrokenImage
							}
							alt={selectedData.trackName}
						/>
						<p>{selectedData.trackName}</p>
					</DropDownTrackSingle>
				</DropDownTrackDiv>
			) : trackSearchData.data !== undefined ? (
				<DropDownTrackDiv>
					{trackSearchData.data.tracks?.items.map(track => {
						return (
							<DropDownTrackSelect
								onClick={() => onSelect(track)}
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
								<div>
									<p>{track.name}</p>
									<p>{track.artists[0].name}</p>
								</div>
							</DropDownTrackSelect>
						);
					})}
				</DropDownTrackDiv>
			) : trackSearchData === '' && autoTrackData.status === 200 ? (
				<DropDownTrackDiv>
					{autoTrackData.data?.items.map(track => {
						return (
							<DropDownTrackSelect
								onClick={() => onSelect(track)}
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
