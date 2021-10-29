import styled from 'styled-components';
import { SmallButton } from './Buttons';

export const PostTopDiv = styled.div`
	background-color: #272432;
	&:hover {
		background-color: #2e2b3b;
	}
	a {
		color: #f7f7f7;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 8px;
	}
`;

export const PostImg = styled.img`
	max-height: 150px;
	width: 150px;
	box-shadow: 0px 0px 0px 2px #5e5577;
	margin: 2px;
`;

export const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 4px;
	overflow: hidden;
	mask-image: linear-gradient(180deg, #000 80%, transparent);
	max-height: 250px;

	h3 {
		margin-bottom: 10px;
		font-size: 1.3rem;
		font-weight: 500;
	}
`;

export const PostBottomDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 4px 8px;

	p,
	a,
	button {
		font-size: 0.8rem;
		color: #f7f7f7;
	}

	button {
		background-color: #272432;

		a {
			text-decoration: none;
			display: flex;
			align-items: center;
			p {
				margin-left: 4px;
			}
		}

		&:hover {
			background-color: #2e2b3b;
		}
	}
`;

export const PostButtonDiv = styled.div`
	display: flex;
	align-items: center;
	img {
		height: 20px;
	}

	input {
		height: 28px;
	}
`;

export const PostCommentButton = styled(SmallButton)`
	display: flex;
	flex-direction: row;
	align-items: center;
	p {
		margin-left: 6px;
	}
`;

export const PostBodyTopDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 14px 14px;
`;

export const PostBodyInfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #272432;
	width: 600px;
`;

export const PostBodyH1 = styled.h1`
	font-size: 2rem;
	color: #f7f7f7;
`;

export const PostBodyP = styled.p`
	font-size: 1rem;
	color: #f7f7f7;
`;

export const PostBodyImgDiv = styled.div`
	position: relative;
`;

export const PostBodyArtistImg = styled.img`
	max-height: 250px;
	width: 250px;
	object-fit: cover;
	box-shadow: 0px 0px 0px 2px #5e5577;
	margin: 2px;
`;

export const PostBodyAlbumImg = styled(PostBodyArtistImg)`
	max-height: 100px;
	width: 100px;
	object-fit: cover;
	box-shadow: 0px 0px 0px 2px #5e5577;
	position: absolute;
	bottom: 0;
	left: 0;
`;

export const PostCommentDiv = styled.div``;
