import React from 'react';

import './Styles/GenreDisplayBlock.css';

function GenreDisplayBlock(props) {
	const { genre, style } = props.data;
	return (
		<div className="genreDiv">
			<a style={{ borderLeft: style }} href="/">
				{genre}
			</a>
		</div>
	);
}

export default GenreDisplayBlock;
