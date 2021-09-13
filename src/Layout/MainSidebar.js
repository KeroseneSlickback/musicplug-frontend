import React from 'react';

import './Styles/MainSidebar.css';

import GenreDisplayBlock from '../Components/GenreDisplayBlock';

const genres = [
	{ genre: 'Pop', style: '3px solid #E833D3' },
	{ genre: 'Hip-Hop', style: '3px solid #4946C8' },
	{ genre: 'Rock', style: '3px solid #C23931' },
	{ genre: 'Country', style: '3px solid #A38771' },
	{ genre: 'Electronic', style: '3px solid #32C69C' },
	{ genre: 'Blues/Jazz', style: '3px solid #466E94' },
	{ genre: 'Classical', style: '3px solid #848484' },
	{ genre: 'Funk/R&B', style: '3px solid #FFA714' },
];

function MainSidebar() {
	return (
		<div className="genreBlockContainer">
			<div>
				{genres.map(genre => {
					return <GenreDisplayBlock data={genre} key={genre} />;
				})}
			</div>
			<div className="newPostDiv">
				<a href="/newpost">New Post</a>
			</div>
		</div>
	);
}

export default MainSidebar;
