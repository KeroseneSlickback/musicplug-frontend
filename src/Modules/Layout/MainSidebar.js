import React from 'react';
import { GenreBlockDiv, GenreContainer } from '../../Components/Containers';
import { NewPostDiv } from '../../Components/SidebarComponents';
import { AddSVG } from '../../Utilities/Images/StyledSVG/AddSVG';

import GenreTab from '../GenreTab';

const genres = [
	{ key: 0, path: '/genre/pop', genre: 'Pop', style: '2px solid #E833D3' },
	{
		key: 1,
		path: '/genre/hiphop',
		genre: 'Hip-Hop',
		style: '2px solid #4946C8',
	},
	{ key: 2, path: '/genre/rock', genre: 'Rock', style: '2px solid #C23931' },
	{
		key: 3,
		path: '/genre/country',
		genre: 'Country',
		style: '2px solid #A38771',
	},
	{
		key: 4,
		path: '/genre/electronic',
		genre: 'Electronic',
		style: '2px solid #32C69C',
	},
	{
		key: 5,
		path: '/genre/bluesjazz',
		genre: 'Blues/Jazz',
		style: '2px solid #466E94',
	},
	{
		key: 6,
		path: '/genre/classical',
		genre: 'Classical',
		style: '2px solid #848484',
	},
	{
		key: 7,
		path: '/genre/funkrb',
		genre: 'Funk/R&B',
		style: '2px solid #FFA714',
	},
];

function MainSidebar() {
	return (
		<GenreBlockDiv>
			<GenreContainer>
				{genres.map(genre => {
					return <GenreTab data={genre} key={genre.key} />;
				})}
			</GenreContainer>
			<NewPostDiv>
				<a href="/newpost">
					<AddSVG />
					<p>New Post</p>
				</a>
			</NewPostDiv>
		</GenreBlockDiv>
	);
}

export default MainSidebar;
