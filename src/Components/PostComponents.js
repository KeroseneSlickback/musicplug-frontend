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
		word-break: break-word;
	}

	p {
		font-size: 1rem;
		color: #f7f7f7;
		text-indent: 20px;
		line-height: 1.2;
		white-space: pre-wrap;
		p {
			margin-top: 10px;
		}
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
	padding: 16px 16px;
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
	margin: 8px;
	word-break: break-word;
`;

export const PostBodyP = styled.p`
	font-size: 1rem;
	color: #f7f7f7;
	text-indent: 20px;
	line-height: 1.2;
	white-space: pre-wrap;
	p {
		margin-top: 10px;
	}
`;

export const PostBodyDataContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PostBodyImgDiv = styled.div`
	height: 250px;
	width: 254px;
	position: relative;
`;

export const PostBodyArtistImg = styled.img`
	height: 250px;
	width: 250px;
	object-fit: cover;
	box-shadow: 0px 0px 0px 2px #5e5577;
`;

export const PostBodyAlbumImg = styled(PostBodyArtistImg)`
	max-height: 110px;
	width: 110px;
	object-fit: cover;
	box-shadow: 0px 0px 0px 2px #5e5577;
	position: absolute;
	bottom: 0;
	left: 0;
`;

export const PostBodyDataDiv = styled.div`
	box-shadow: 0px 0px 0px 2px #5e5577;
	width: 250px;
	margin-top: 16px;
	color: #f7f7f7;
	padding: 6px;
	background-color: #141221;
`;

export const DataInfoContainer = styled.div`
	div {
		width: 100%;
		border-bottom: 2px solid #5e5577;
		padding-bottom: 4px;
		p {
			font-size: 0.9rem;
			margin: 4px 0 6px 0;
		}
		strong {
			color: #f7f7f7;
			font-size: 1.25rem;
			margin-left: 18px;
			word-break: break-word;
			text-decoration: none;
		}
	}
`;

export const DataInfoButtonContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 20px 0;
	width: 100%;
	border-bottom: 2px solid #5e5577;
	div {
		width: 80px;
		p {
			font-size: 1.25rem;
		}
	}
`;

export const DataInfoLikeButtonContainer = styled(DataInfoButtonContainer)`
	padding: 10px 0;
	border-bottom: none;
	button {
		p {
			font-size: 1.25rem;
		}
		svg {
			height: 34px;
		}
	}
`;

export const PostCommentDiv = styled.div``;
