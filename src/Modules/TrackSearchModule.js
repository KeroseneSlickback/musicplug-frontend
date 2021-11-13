import React from 'react';

import {
	FormBlock,
	PostLabel,
	PostInput,
	DropDownTrackDiv,
	DropDownTrackSingle,
	DropDownTrackSelect,
	CenteredModuleDiv,
} from '../Components/Forms';
import { BrokenImageSVG } from '../Utilities/Images/StyledSVG/BrokenImageSVG';
import { StyledLoading } from '../Utilities/Images/StyledSVG/StyledLoading';
import WarningModule from './WarningModule';
import RegularMessageModule from './RegularMessageModule';

function TrackSearchModule({
	selectedData,
	trackState,
	trackSearched,
	onChange,
	trackSearchData,
	trackSearchLoad,
	trackSearchError,
	autoTrackData,
	autoTrackLoad,
	autoTrackError,
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

			{trackSearchLoad || autoTrackLoad ? (
				<CenteredModuleDiv fade>
					<StyledLoading firstColor={'#4ac09b'} secondColor={'#f7f7f7'} />
				</CenteredModuleDiv>
			) : trackSearchError || autoTrackError ? (
				<CenteredModuleDiv>
					<WarningModule string="An error has occured, please refresh and try again." />
				</CenteredModuleDiv>
			) : trackSearched ? (
				<DropDownTrackDiv>
					<DropDownTrackSingle>
						{selectedData.trackImgUrl ? (
							<img
								src={selectedData.trackImgUrl}
								alt={selectedData.trackName}
							/>
						) : (
							<BrokenImageSVG />
						)}
						<p>{selectedData.trackName}</p>
					</DropDownTrackSingle>
				</DropDownTrackDiv>
			) : trackSearchData.data !== undefined ? (
				trackSearchData.data.tracks.items.length === 0 ? (
					<RegularMessageModule string="No songs found." />
				) : (
					<DropDownTrackDiv>
						{trackSearchData.data.tracks?.items.map(track => {
							return (
								<DropDownTrackSelect
									select
									onClick={() => onSelect(track)}
									key={track.id}
								>
									{track.album.images[2].url ? (
										<img src={track.album.images[2].url} alt={track.name} />
									) : (
										<BrokenImageSVG />
									)}
									<div>
										<p>{track.name}</p>
										<p>{track.artists[0].name}</p>
									</div>
								</DropDownTrackSelect>
							);
						})}
					</DropDownTrackDiv>
				)
			) : trackSearchData === '' && autoTrackData.status === 200 ? (
				autoTrackData.data.items.length === 0 ? (
					<RegularMessageModule string="No songs found." />
				) : (
					<DropDownTrackDiv>
						{autoTrackData.data?.items.map(track => {
							return (
								<DropDownTrackSelect
									select
									onClick={() => onSelect(track)}
									key={track.id}
								>
									<p>{track.track_number}</p>
									<p>{track.name}</p>
								</DropDownTrackSelect>
							);
						})}
					</DropDownTrackDiv>
				)
			) : null}
		</FormBlock>
	);
}

export default TrackSearchModule;
