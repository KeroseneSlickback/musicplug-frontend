MusicPlug is a music recommendation social media app built as both practice and demonstration of my skills and knowledge around React, Node/Express/Mongoose/MongoDB.

The main focus of the app was to create a CRUD app using the Spotify API to deliver external images, recommended listening tracks, and help users search and recommend music through fetching systems.

Front-end elements:

- Spotify authorization to access user's username, email, and profile picture to make registering easier. Spotify's OAuth 2.0 verfication process is handled on conjuction with MusicPlug's backend to hand back refresh and access tokens to front-end.

- Spotify API search to find music artist, album, or track. User can freely choose to search in whichever field they wish first, and the other fields automatically fetch and generate infomation upon selection. In the end, the user can recommend an artist, album, or track which is linked with Spotify to allow other users to see or listen to the recommendation directly (no Spotify login is required to explore the app or Spotify content).

- Sorting and pagination within React with help of react-router-dom and custom pagination logic in conjuction with the back-end API.

- React Styled Components to handle styling with GlobalStyles and Theme switching. In extension, custom styled SVGs to make styling of SVGs easier.

- Full responsive layout based from mobile-first styling of 320px in width to >1024px.

- Custom fetch hooks used to easily handle loading, errors, and data.

Limiting developmental areas, or restricted due to initial scope:

- Currently, the Spotify API allows for a limited number of users who have been previously white-listed by the app's creator to use their API through MusicPlug. Spotify must manually verify the app owner for the ability to let anyone verify for the app.

- User's are able to choose their username, email, and password (pulled from Spotify for convenience, but can be altered). However, they are limited to their Spotify profile image as currently the back-end doesn't support user profile pictures (implementation was left out for sake of ease of initial development). Users can change username and password, and delete their account with ease.

- No search implementation, nor checking if similar new post content has been previously submitted.
