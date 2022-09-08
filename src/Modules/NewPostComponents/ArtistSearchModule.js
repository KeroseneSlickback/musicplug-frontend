import React from "react";

import {
  FormBlock,
  PostLabel,
  PostInput,
  DropDownArtist,
  DropDownArtistSelect,
  CenteredModuleDiv,
} from "../../Components/Forms";
import { BrokenImageSVG } from "../../Utilities/Images/StyledSVG/BrokenImageSVG";
import { StyledLoading } from "../../Utilities/Images/StyledSVG/StyledLoading";
import WarningMessageModule from "../MessageComponents/WarningMessageModule";
import RegularMessageModule from "../MessageComponents/RegularMessageModule";

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
        onChange={(e) => {
          onChange(e);
        }}
        placeholder="Pink Floyd..."
      ></PostInput>
      {/* The rendering methology can be a little convoluted
				- At first, if anything is loading, shows loading icon
				- Then if error, shows error
				- If album has completed a search (as in user selected an element), it displays that only
				- Then the next rendering section show returned content if user just searched
				- Lastly, if the search bar is clear, or user clears it, no results are shown
			*/}
      {artistSearchLoad || singleArtistLoad ? (
        <CenteredModuleDiv fade>
          <StyledLoading firstColor={"#4ac09b"} secondColor={"#f7f7f7"} />
        </CenteredModuleDiv>
      ) : artistSearchError || singleArtistError ? (
        <CenteredModuleDiv>
          <WarningMessageModule string="An error has occured, please refresh and try again." />
        </CenteredModuleDiv>
      ) : artistSearched ? (
        <DropDownArtist>
          {selectedData.artistImgUrl !== "" ? (
            <img
              src={selectedData.artistImgUrl}
              alt={selectedData.artistName}
            />
          ) : (
            <BrokenImageSVG />
          )}
          <p>{selectedData.artistName}</p>
        </DropDownArtist>
      ) : artistSearchData.data ? (
        artistSearchData.data.artists.items.length === 0 ? (
          <RegularMessageModule string="No Artists Found." />
        ) : (
          <div>
            {artistSearchData.data.artists?.items.map((artist) => {
              return (
                <DropDownArtistSelect
                  onClick={() => onSelect(artist)}
                  key={artist.id}
                >
                  {artist.images[1] ? (
                    <img src={artist.images[1].url} alt={artist.name} />
                  ) : (
                    <BrokenImageSVG />
                  )}
                  <p>{artist.name}</p>
                </DropDownArtistSelect>
              );
            })}
          </div>
        )
      ) : artistState === "" ? null : null}
      {}
    </FormBlock>
  );
}

export default ArtistSearchModule;
