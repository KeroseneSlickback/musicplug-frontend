import React from "react";
import { GenreLinkButton } from "../Components/Buttons";

function GenreTab(props) {
  const { genre, style, path } = props.data;

  return (
    <GenreLinkButton
      style={{ borderLeft: style, borderRight: style }}
      to={path}
    >
      {genre}
    </GenreLinkButton>
  );
}

export default GenreTab;
