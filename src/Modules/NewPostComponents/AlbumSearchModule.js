import React from "react";

import {
  FormBlock,
  PostLabel,
  PostInput,
  DropDownAlbumDiv,
  DropDownAlbumSingle,
  DropDownAlbumSelect,
  CenteredModuleDiv,
} from "../../Components/Forms";
import { BrokenImageSVG } from "../../Utilities/Images/StyledSVG/BrokenImageSVG";
import { StyledLoading } from "../../Utilities/Images/StyledSVG/StyledLoading";
import DelayMessageModule from "../MessageComponents/DelayMessageModule";
import RegularMessageModule from "../MessageComponents/RegularMessageModule";
import WarningMessageModule from "../MessageComponents/WarningMessageModule";

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
        onChange={(e) => {
          onChange(e);
        }}
        placeholder="Dark Side of the Moon..."
      ></PostInput>
      {/* The rendering methology can be a little convoluted
				- At first, if anything is loading, shows loading icon
				- Then if error, shows error
				- If album has completed a search (as in user selected an element), it displays that only
				- Then the next two rendering sections show returned content if user just searched
				- Lastly, if the search bar is clear, or user clears it, no results are shown
			*/}
      {albumSearchLoad || autoAlbumLoad || singleAlbumLoad ? (
        <CenteredModuleDiv fade>
          <StyledLoading firstColor={"#4ac09b"} secondColor={"#f7f7f7"} />
          <DelayMessageModule />
        </CenteredModuleDiv>
      ) : autoAlbumError || singleAlbumError || albumSearchError ? (
        <CenteredModuleDiv>
          <WarningMessageModule string="An error has occured, please refresh and try again." />
        </CenteredModuleDiv>
      ) : albumSearched ? (
        <DropDownAlbumDiv>
          <DropDownAlbumSingle>
            {selectedData.albumImgUrl ? (
              <img
                src={selectedData.albumImgUrl}
                alt={selectedData.albumName}
              />
            ) : (
              <BrokenImageSVG />
            )}
            <p>{selectedData.albumName}</p>
          </DropDownAlbumSingle>
        </DropDownAlbumDiv>
      ) : albumSearchData.data ? (
        albumSearchData.data.albums?.items.length === 0 ? (
          <RegularMessageModule string="No albums found." />
        ) : (
          <DropDownAlbumDiv>
            {albumSearchData.data.albums?.items.map((album) => {
              return (
                <DropDownAlbumSelect
                  onClick={() => onSelect(album)}
                  key={album.id}
                >
                  {album.images[1].url ? (
                    <img src={album.images[1].url} alt={album.name} />
                  ) : (
                    <BrokenImageSVG />
                  )}
                  <p>{album.name}</p>
                </DropDownAlbumSelect>
              );
            })}
          </DropDownAlbumDiv>
        )
      ) : albumSearchData === "" && autoAlbumData.status === 200 ? (
        autoAlbumData.data.items.length === 0 ? (
          <RegularMessageModule string="No albums found." />
        ) : (
          <DropDownAlbumDiv>
            {autoAlbumData.data?.items.map((album) => {
              return (
                <DropDownAlbumSelect
                  onClick={() => onSelect(album)}
                  key={album.id}
                >
                  {album.images[1].url ? (
                    <img src={album.images[1].url} alt={album.name} />
                  ) : (
                    <BrokenImageSVG />
                  )}
                  <p>{album.name}</p>
                </DropDownAlbumSelect>
              );
            })}
          </DropDownAlbumDiv>
        )
      ) : albumState === "" ? null : null}
    </FormBlock>
  );
}

export default AlbumSearchModule;
