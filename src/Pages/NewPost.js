import React, { useState } from 'react';

import './Styles/NewPost.scss';

function NewPost(props) {
	const [postData, setPostData] = useState({
		title: '',
		text: '',
		genre: '',
		artist: '',
		image: '',
		recommended: '',
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setPostData(prevState => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
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
							value={postData.title}
							onChange={handleChange}
							placeholder="I really really really like this..."
							required
						/>
					</div>
					<div className="newInputDiv">
						<label htmlFor="text">Explain your recommendation:</label>
						<textarea
							name="text"
							cols="40"
							rows="15"
							placeholder="This time when I was searching bandcamp, I came across this artist..."
							value={postData.text}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<div className="newInputDiv">
						<label htmlFor="genre">Genre:</label>
						<select
							className="genreSelect"
							name="genre"
							value={postData.genre}
							onChange={handleChange}
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
							value={postData.artist}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="newInputDiv">
						<label htmlFor="image">Artist/Band image (URL):</label>
						<input
							name="image"
							type="url"
							value={postData.image}
							onChange={handleChange}
							placeholder="https://bandimage..."
							pattern="https://.*"
							required
						/>
					</div>
					<div className="newInputDiv">
						<label htmlFor="recommended">Recommended Youtube link:</label>
						<input
							name="recommended"
							type="url"
							value={postData.recommended}
							onChange={handleChange}
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
