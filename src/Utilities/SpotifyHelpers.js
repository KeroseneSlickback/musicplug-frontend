const CLIENT_ID = '5de079e8a1034873971db060a53bf092';
const RESPONSE_TYPE = 'code';
export const SPOTIFY_AUTHORIZE_ENDPOINT =
	'https://accounts.spotify.com/authorize';
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/spotifyauth';
const SPACE_DELIMITER = '%20';
const SCOPES = ['user-read-private', 'user-read-email'];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

export const loginUrl = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=${RESPONSE_TYPE}&show_dialog=true`;
