// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import useSpotifyRefresh from './useSpotifyRefresh';

// const useGetSpotifyUser = spotifyVer => {
// 	const access_token = localStorage.getItem('spotify_access');
// 	const [user, setUser] = useState({
// 		username: '',
// 		email: '',
// 		avatarLink: '',
// 		spotifyLink: '',
// 	});

// 	useEffect(() => {
// 		if (spotifyVer && spotifyVer !== undefined) {
// 			axios
// 				.get('https://api.spotify.com/v1/me', {
// 					headers: {
// 						Authorization: 'Bearer ' + access_token,
// 					},
// 				})
// 				.then(res => {
// 					setUser(prevState => ({
// 						...prevState,
// 						username: res.data.display_name,
// 						email: res.data.email,
// 						avatarLink: res.data.images[0].url,
// 						spotifyLink: res.data.href,
// 					}));
// 					return user;
// 				})
// 				.catch(err => {
// 					if (err.response.status === 401) {
// 						const refresh_token = localStorage.getItem('spotify_refresh');
// 						axios
// 							.get('http://localhost:8888/refresh_token', {
// 								params: { refresh_token },
// 							})
// 							.then(res => {
// 								localStorage.setItem('spotify_access', res.data.access_token);
// 							})
// 							.catch(err => console.log(err));
// 					}
// 					console.log(err);
// 				});
// 		} else {
// 			return;
// 		}
// 	}, []);
// };

// export default useGetSpotifyUser;
