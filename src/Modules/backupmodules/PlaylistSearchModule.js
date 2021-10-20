import React from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	DropDownTrackDiv,
	DropDownTrackSingle,
	DropDownTrackSelect,
	CenteredModuleDiv,
} from '../../Components/Forms';
import StyledBrokenImage from '../Utilities/Images/svg/broken_image.svg';
import { StyledLoading } from '../../Utilities/Images/StyledSVG/StyledLoading';

function PlaylistSearchModule({}) {
	return (
		<FormBlock>
			<PostLabel htmlFor="playlist">Search for song:</PostLabel>
			<PostInput
				name="playlist"
				type="text"
				value={trackState}
				onChange={e => {
					onChange(e);
				}}
				placeholder="Rock Love Songs..."
			></PostInput>

			{trackSearchLoad || autoTrackLoad ? (
				<CenteredModuleDiv fade>
					<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
				</CenteredModuleDiv>
			) : trackSearchError || autoTrackError ? (
				<CenteredModuleDiv>
					<h2>An error has occured, please refresh page.</h2>
				</CenteredModuleDiv>
			) : trackSearched ? (
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
			) : null}
		</FormBlock>
	);
}

export default PlaylistSearchModule;
