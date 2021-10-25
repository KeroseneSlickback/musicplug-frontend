import React from 'react';
import { Link } from 'react-router-dom';

import { GenreTabDiv } from '../Components/SidebarComponents';

function GenreTab(props) {
	const { genre, style, path } = props.data;

	return (
		<GenreTabDiv>
			<Link style={{ borderLeft: style }} to={path}>
				{genre}
			</Link>
		</GenreTabDiv>
	);
}

export default GenreTab;
