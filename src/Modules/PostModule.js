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

import artImage from '../Utilities/Images/dearhunter.jpg';

import fullHeartSVG from '../Utilities/Images/svg/favorite_black_24dp.svg';
import chatSVG from '../Utilities/Images/svg/forum_black_24dp.svg';
import headphoneSVG from '../Utilities/Images/svg/headphones_black_24dp.svg';

function PostModule(props) {
	const { title, text, comments, owner } = props.data;
	return (
		<PostContainer>
			<PostTopDiv>
				<a href="/">
					<TextDiv>
						<h3>{title}</h3>
						<p>{text}</p>
					</TextDiv>
					<PostImg src={artImage} alt="artImage" />
				</a>
			</PostTopDiv>
			<PostBottomDiv>
				<div>
					<p> - {owner.username}</p>
				</div>
				<PostButtonDiv>
					<SmallButton>GENRE</SmallButton>
					<SmallButton>
						<a href="/">
							<img src={headphoneSVG} alt="headphones" />
							<p>Listen on Youtube</p>
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
