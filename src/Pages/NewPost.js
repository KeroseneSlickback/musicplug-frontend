import React, { useState, useRef, useEffect } from 'react';

import './Styles/NewPost.css';

function NewPost(props) {
	const titleInputRef = useRef();
	const textbodyInputRef = useRef();
	const selectedGenreInputRef = useRef();
	const youtubeInputRef = useRef();
	const [artistState, setArtistState] = useState('');
	const initialRender = useRef(true);

	// Call onchange for when artist is changed, thus fetched
	// When state isn't changed for a period of time, then fetch

	function handleSubmit(e) {
		e.preventDefault();

		const title = titleInputRef.current.value;
		const text = textbodyInputRef.current.value;
		const genre = selectedGenreInputRef.current.value;
		const artist = artistState;
		const recommended = youtubeInputRef.current.value;

		const postData = {
			title,
			text,
			artist,
			// bio,
			genre,
			// image,
			votes: 0,
			recommended,
		};
		e.target.reset();
		console.log(postData);
	}

	let delay = 10;

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
		} else {
			const timer = setTimeout(() => {
				console.log('Timer up!');
			}, delay * 100);
			return () => clearTimeout(timer);
		}
	}, [artistState]);

	return (
		<div className="newPostInputDiv">
			<h1>New Post</h1>
			<div className="userInputDiv">
				<form onSubmit={handleSubmit}>
					<div className="newInputDiv">
						<label htmlFor="title">Post title:</label>
						<input
							name="title"
							name="title"
							type="text"
							placeholder="I really really really like this..."
							ref={titleInputRef}
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
							ref={textbodyInputRef}
							required
						></textarea>
					</div>
					<div className="newInputDiv">
						<label htmlFor="genre">Genre:</label>
						<select
							className="genreSelect"
							name="genre"
							ref={selectedGenreInputRef}
							required
						>
							<option value="" selected="selected" disabled>
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
							value={artistState}
							onChange={e => setArtistState(e.target.value)}
							required
						/>
					</div>
					<div className="newInputDiv">
						<label htmlFor="youtube">Recommended Youtube link:</label>
						<input
							name="youtube"
							type="url"
							ref={youtubeInputRef}
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
