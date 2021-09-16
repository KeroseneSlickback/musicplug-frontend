import React, { useState } from 'react';
import useDebounceFetch from '../Hooks/useDebounceFetch';

import './Styles/NewPost.css';

function NewPost(props) {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [genre, setGenre] = useState('');
	const [artist, setArtist] = useState('');
	const [image, setImage] = useState('');
	const [recommended, setRecommended] = useState('');

	const [searchParams, setSearchParams] = useState({
		url: 'https://ws.audioscrobbler.com/2.0',
		params: {
			method: 'artist.search',
			limit: 3,
			artist: 'cher',
			api_key: '965e58baf164ac9a296b3190e678218e',
			format: 'json',
		},
		delay: 10,
	});

	const fetchedData = useDebounceFetch(searchParams);

	console.log(fetchedData.data);

	function handleArtistChange(e) {
		const { name, value } = e.target;
		setArtist(value);
		setSearchParams(prevState => ({
			...prevState,
			params: { ...prevState.params, [name]: value },
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();

		const postData = {
			title,
			text,
			artist,
			// bio,
			genre,
			image,
			votes: 0,
			recommended,
		};
		e.target.reset();
		console.log(postData);
	}

	return (
		<div className="newPostInputDiv">
			<h1>New Post</h1>
			<div className="userInputDiv">
				<form onSubmit={handleSubmit}>
					<div className="newInputDiv">
						<label htmlFor="title">Post title:</label>
						<input
							name="title"
							type="text"
							value={title}
							onChange={e => setTitle(e.target.value)}
							placeholder="I really really really like this..."
							required
						/>
					</div>
					<div className="newInputDiv">
						<label htmlFor="textbody">Explain your recommendation:</label>
						<textarea
							name="textbody"
							cols="40"
							rows="15"
							placeholder="This time when I was searching bandcamp, I came across this artist..."
							value={text}
							onChange={e => setText(e.target.value)}
							required
						></textarea>
					</div>
					<div className="newInputDiv">
						<label htmlFor="genre">Genre:</label>
						<select
							className="genreSelect"
							name="genre"
							value={genre}
							onChange={e => setGenre(e.target.value)}
							required
						>
							<option value="" disabled>
								Select a genre
							</option>
							<option value="pop">Pop</option>
							<option value="hiphop">Hip-Hop</option>
							<option value="rock">Rock</option>
							<option value="country">Country</option>
							<option value="electronic">Electronic</option>
							<option value="bluesjazz">Blues/Jazz</option>
							<option value="classical">Classical</option>
							<option value="funkrb">Funk/R&B</option>
						</select>
					</div>
					<div className="newInputDiv">
						<label htmlFor="artist">Artist/Band:</label>
						<input
							name="artist"
							type="text"
							placeholder="Daft Punk"
							value={artist}
							onChange={handleArtistChange}
							required
						/>
					</div>
					{/* <div>
						{fetchedData.data != null ? (
							<img
								src={
									fetchedData.data.data.results.artistmatches.artist[1]
										.image[0]['#text']
								}
								alt=""
							/>
						) : null}
					</div> */}
					<div className="newInputDiv">
						<label htmlFor="image">Artist/Band image (URL):</label>
						<input
							name="image"
							type="url"
							value={image}
							onChange={e => setImage(e.target.value)}
							placeholder="https://bandimage..."
							pattern="https://.*"
							required
						/>
					</div>
					<div className="newInputDiv">
						<label htmlFor="youtube">Recommended Youtube link:</label>
						<input
							name="youtube"
							type="url"
							value={recommended}
							onChange={e => setRecommended(e.target.value)}
							placeholder="https://youtube.com..."
							pattern="https://.*"
							required
						/>
					</div>

					<button className="btn-medium">Submit New Post</button>
				</form>
			</div>
		</div>
	);
}

export default NewPost;
