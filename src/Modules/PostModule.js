import React from 'react';
import { SmallButton } from '../Components/Buttons';
import { PostContainer } from '../Components/Containers';
import {
	PostBottomDiv,
	PostButtonDiv,
	PostCommentButton,
	PostImg,
	PostTopDiv,
	TextDiv,
} from '../Components/PostComponents';

import fullHeartSVG from '../Utilities/Images/svg/favorite_black_24dp.svg';
import chatSVG from '../Utilities/Images/svg/forum_black_24dp.svg';
import headphoneSVG from '../Utilities/Images/svg/headphones_black_24dp.svg';

function PostModule(props) {
	// console.log(props);
	const { title, body, genre, comments, owner } = props.data;
	const {
		// artistName,
		// artistId,
		// artistImgUrl,
		// artistUrl,
		// albumName,
		// albumId,
		albumImgUrl,
		// albumUrl,
		// trackName,
		// trackId,
		// trackImgUrl,
		trackUrl,
	} = props.data.recommendation;
	return (
		<PostContainer>
			<PostTopDiv>
				<a href="/">
					<TextDiv>
						<h3>{title}</h3>
						<p>{body}</p>
					</TextDiv>
					<PostImg src={albumImgUrl} alt="artImage" />
				</a>
			</PostTopDiv>
			<PostBottomDiv>
				<div>
					<p> - {owner.username}</p>
				</div>
				<PostButtonDiv>
					<SmallButton>{genre}</SmallButton>
					<SmallButton>
						<a href={trackUrl} target="_blank" rel="noreferrer">
							<img src={headphoneSVG} alt="headphones" />
							<p>Listen on Spotify</p>
						</a>
					</SmallButton>
					<PostCommentButton>
						<img src={chatSVG} alt={chatSVG} />
						<p>{comments.length} Comments</p>
					</PostCommentButton>
					<input type="image" alt="test" src={fullHeartSVG} />
				</PostButtonDiv>
			</PostBottomDiv>
		</PostContainer>
	);
}

export default PostModule;
