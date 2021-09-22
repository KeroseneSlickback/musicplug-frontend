import React from 'react';

import { GenreTabDiv } from '../Components/SidebarComponents';

function GenreTab(props) {
	const { genre, style } = props.data;
	return (
		<GenreTabDiv>
			<a style={{ borderLeft: style }} href="/">
				{genre}
			</a>
		</GenreTabDiv>
	);
}

export default GenreTab;
