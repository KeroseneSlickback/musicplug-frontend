import React from 'react';

import './Styles/PostBlock.css';

import artistImage from '../Images/dearhunter.jpg';
// import openHeartSVG from '../Images/svg/favorite_border_black_24dp.svg';
import fullHeartSVG from '../Images/svg/favorite_black_24dp.svg';
import chatSVG from '../Images/svg/forum_black_24dp.svg';
import headphoneSVG from '../Images/svg/headphones_black_24dp.svg';

function PostBlock(props) {
	const { title, text, comments, owner } = props.data;
	return (
		<div className="postContainer">
			<div className="postTop">
				<a href="/">
					<div className="textDiv">
						<h3>{title}</h3>
						<p>{text}</p>
					</div>
					<div>
						<a href="">
							<img className="musicImg" src={artistImage} alt="artistImage" />
						</a>
					</div>
				</a>
			</div>
			<div className="postBottom">
				<div>
					<p>- {owner.username}</p>
				</div>
				<div className="buttonBox">
					<button className="btn-small genreBox">GENRE</button>
					<button className="btn-small youtube">
						<a href="">
							<img src={headphoneSVG} alt="" />
							<p>Listen on Youtube</p>
						</a>
					</button>
					<button className="btn-small commentBox">
						<img src={chatSVG} alt={chatSVG} />
						<p>{comments.length} Comments</p>
					</button>
					<input type="image" src={fullHeartSVG} />
				</div>
			</div>
		</div>
	);
}

export default PostBlock;
