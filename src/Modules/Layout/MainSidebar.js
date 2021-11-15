import React from 'react';
import { GenreBlockDiv } from '../../Components/Containers';
import { NewPostDiv } from '../../Components/SidebarComponents';
// import { AddSVG } from '../../Utilities/Images/StyledSVG/AddSVG';

import GenreTab from '../GenreTab';

const genres = [
	{ key: 0, path: '/genre/pop', genre: 'Pop', style: '3px solid #E833D3' },
	{
		key: 1,
		path: '/genre/hiphop',
		genre: 'Hip-Hop',
		style: '3px solid #4946C8',
	},
	{ key: 2, path: '/genre/rock', genre: 'Rock', style: '3px solid #C23931' },
	{
		key: 3,
		path: '/genre/country',
		genre: 'Country',
		style: '3px solid #A38771',
	},
	{
		key: 4,
		path: '/genre/electronic',
		genre: 'Electronic',
		style: '3px solid #32C69C',
	},
	{
		key: 5,
		path: '/genre/bluesjazz',
		genre: 'Blues/Jazz',
		style: '3px solid #466E94',
	},
	{
		key: 6,
		path: '/genre/classical',
		genre: 'Classical',
		style: '3px solid #848484',
	},
	{
		key: 7,
		path: '/genre/funkrb',
		genre: 'Funk/R&B',
		style: '3px solid #FFA714',
	},
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
				<a href="/newpost">
					{/* <AddSVG /> */}
					New Post
				</a>
			</NewPostDiv>
		</GenreBlockDiv>
	);
}

export default MainSidebar;
