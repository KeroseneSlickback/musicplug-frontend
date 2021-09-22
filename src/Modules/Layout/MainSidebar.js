import React from 'react';
import { GenreBlockDiv } from '../../Components/Containers';
import { GenreTabDiv, NewPostDiv } from '../../Components/SidebarComponents';

import GenreTab from '../GenreTab';

const genres = [
	{ key: 0, genre: 'Pop', style: '3px solid #E833D3' },
	{ key: 1, genre: 'Hip-Hop', style: '3px solid #4946C8' },
	{ key: 2, genre: 'Rock', style: '3px solid #C23931' },
	{ key: 3, genre: 'Country', style: '3px solid #A38771' },
	{ key: 4, genre: 'Electronic', style: '3px solid #32C69C' },
	{ key: 5, genre: 'Blues/Jazz', style: '3px solid #466E94' },
	{ key: 6, genre: 'Classical', style: '3px solid #848484' },
	{ key: 7, genre: 'Funk/R&B', style: '3px solid #FFA714' },
];

function MainSidebar() {
	return (
		<GenreBlockDiv>
			<div>
				{genres.map(genre => {
					return <GenreTab data={genre} key={genre.key} />;
				})}
			</div>
			<NewPostDiv>
				<a href="/newpost">New Post</a>
			</NewPostDiv>
		</GenreBlockDiv>
	);
}

export default MainSidebar;
