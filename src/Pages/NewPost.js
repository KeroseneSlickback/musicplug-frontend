import React, { useState } from 'react';

import { MediumStyledButton } from '../Components/Buttons';
import { PageContainer } from '../Components/Containers';
import {
	FormContainer,
	Form,
	FormBlock,
	PostLabel,
	PostInput,
	PostTextArea,
	PostSelect,
} from '../Components/Forms';

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
		<PageContainer>
			<FormContainer>
				<h1>New Post</h1>
				<Form onSubmit={handleSubmit}>
					<FormBlock>
						<PostLabel htmlFor="">Post Title:</PostLabel>
						<PostInput
							name="title"
							type="text"
							value={postData.title}
							onChange={handleChange}
							placeholder="I really really really like this..."
							required
						/>
					</FormBlock>
					<FormBlock>
						<PostLabel htmlFor="text">Explain your recommendation:</PostLabel>
						<PostTextArea
							name="text"
							cols="50"
							rows="15"
							placeholder="This time when I was searching bandcamp, I came across this artist..."
							value={postData.text}
							onChange={handleChange}
							required
						></PostTextArea>
					</FormBlock>
					<FormBlock>
						<PostLabel htmlFor="genre">Genre:</PostLabel>
						<PostSelect
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
						</PostSelect>
					</FormBlock>
					<FormBlock>
						<PostLabel htmlFor="artist">Artist/Band:</PostLabel>
						<PostInput
							name="artist"
							type="text"
							placeholder="Daft Punk"
							value={postData.artist}
							onChange={handleChange}
							required
						/>
					</FormBlock>
					<FormBlock>
						<PostLabel htmlFor="image">Artist/Band image (URL):</PostLabel>
						<PostInput
							name="image"
							type="url"
							value={postData.image}
							onChange={handleChange}
							placeholder="https://bandimage..."
							pattern="https://.*"
							required
						/>
					</FormBlock>
					<FormBlock>
						<PostLabel>Recommended Youtube Link:</PostLabel>
						<PostInput
							name="recommended"
							type="url"
							value={postData.recommended}
							onChange={handleChange}
							placeholder="https://youtube.com..."
							pattern="https://.*"
							required
						/>
					</FormBlock>
					<MediumStyledButton bottom>Submit New Post</MediumStyledButton>
				</Form>
			</FormContainer>
		</PageContainer>
	);
}

export default NewPost;
