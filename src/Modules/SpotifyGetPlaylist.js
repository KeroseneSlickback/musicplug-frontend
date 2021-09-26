import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MediumStyledButton } from '../Components/Buttons';

const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/me/playlists';

function SpotifyGetPlaylist() {
	const [token, setToken] = useState('');
	const [data, setData] = useState({});

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			setToken(localStorage.getItem('accessToken'));
		}
	}, []);

	const handleGetPlaylist = () => {
		axios
			.get(PLAYLIST_ENDPOINT, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
			.then(response => {
				setData(response.data);
				console.log(data.items);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<>
			<MediumStyledButton onClick={handleGetPlaylist}>
				Get Playlists
			</MediumStyledButton>
			{data?.items
				? data.items.map(item => (
						<a href={item.external_urls.spotify}>{item.name}</a>
				  ))
				: null}
		</>
	);
}

export default SpotifyGetPlaylist;
