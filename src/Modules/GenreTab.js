import React from 'react';
import { Link } from 'react-router-dom';
import { GenreLinkButton } from '../Components/Buttons';

import { GenreTabDiv } from '../Components/SidebarComponents';

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
