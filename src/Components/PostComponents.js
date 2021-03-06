import styled, { css } from 'styled-components';
import { SmallButton } from './Buttons';
import { devices } from '../Styles/Variables';

export const PostTopDiv = styled.div`
	padding: 0 18px;
	background-color: ${props => props.theme.subdued};
	&:hover {
		background-color: ${props => props.theme.subduedAlt};
	}
	a {
		color: ${props => props.theme.fontColor};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 4px 0;
	}

	@media ${devices.tabletS} {
		padding: 0 8px;
		border-radius: 6px;
		a {
			padding: 8px 0 0 0;
		}
	}
`;

export const PostImg = styled.img`
	max-height: 75px;
	width: 75px;
	border-radius: 6px;
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	margin: 2px 0 2px 2px;
	@media ${devices.tabletS} {
		max-height: 100px;
		width: 100px;
	}

	@media ${devices.tabletM} {
		max-height: 120px;
		width: 120px;
	}
`;

export const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 4px;
	overflow: hidden;
	mask-image: linear-gradient(180deg, #000 80%, transparent);
	max-height: 250px;

	h3 {
		word-break: break-word;
		font-size: 1rem;
		padding-bottom: 2px;
	}

	h5 {
		font-weight: 400;
		font-size: 0.7rem;
		margin: 4px 0 6px 16px;
	}

	p {
		font-size: 0.8rem;
		color: ${props => props.theme.fontColor};
		text-indent: 10px;
		line-height: 1;
		white-space: pre-wrap;
		margin-top: 2px;
		padding: 0 4px;
	}

	@media ${devices.tabletM} {
		h3 {
			font-size: 1.2rem;
		}
		p {
			font-size: 0.9rem;
		}
	}
`;

export const PostViewImgUserDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const PostUserDiv = styled.div`
	background-color: red;
	height: 25px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 4px 0;
	img {
		margin-right: 4px;
		width: 34px;
		border-radius: 6px;
		box-shadow: 0px 0px 1px 1px ${props => props.theme.highlightWhite};
	}
	p {
		font-size: 0.7rem;
		color: ${props => props.theme.fontColor};
		white-space: nowrap;
	}

	${props =>
		props.comment &&
		css`
			flex-direction: column;
		`}

	${props =>
		props.small &&
		css`
			img {
				width: 20px;
			}
		`}
`;

export const PostButtonDiv = styled.div`
	height: 26px;
	width: 100%;
	display: grid;
	grid-gap: 2px;
	grid-template-columns: 70px 60px 100px 40px;
	grid-template-rows: 1fr;
	justify-items: center;
	align-items: center;
	justify-content: space-between;
	margin: 4px 0;

	input {
		height: 20px;
	}

	@media ${devices.mobileL} {
		width: auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	@media ${devices.tabletS} {
		padding: 0;
	}

	@media ${devices.tabletM} {
		width: 100%;
		height: 35px;
	}
`;

export const PostBodyButtonDiv = styled.div`
	display: grid;
	grid-gap: 2px;
	grid-template-rows: 1fr;
	justify-items: center;
	height: auto;
	margin: 0;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: space-between;
	padding-top: 18px;

	@media ${devices.mobileM} {
		grid-template-columns: 3fr 1fr;
	}

	@media ${devices.mobileL} {
		grid-template-columns: 3fr 1fr;
	}

	@media ${devices.tabletM} {
		padding: 0;
		width: 100%;
		height: 35px;
	}
`;

export const PostBodyRightButtonDiv = styled.div`
	justify-self: end;
	display: flex;
	flex-wrap: nowrap;
	align-items: flex-end;
`;

export const PostCommentButton = styled(SmallButton)`
	display: flex;
	flex-direction: row;
	align-items: center;
	p {
		margin-left: 6px;
	}
`;

export const PostBodyContainer = styled.div`
	@media ${devices.tabletS} {
		padding: 8px;
	}
	@media ${devices.tabletM} {
		padding: 0;
	}
`;

export const PostBodyGridContainer = styled.div`
	width: 100%;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto auto;
	justify-items: center;
	grid-template-areas:
		'body'
		'info'
		'comment';
	gap: 8px;

	@media ${devices.tabletM} {
		padding: 8px;
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			'body info'
			'comment info';
		align-items: start;
		gap: 8px;
	}
`;

export const PostBodyTextDiv = styled.div`
	grid-area: body;
	justify-self: center;
	background-color: ${props => props.theme.subdued};
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	width: 100%;
	color: ${props => props.theme.fontColor};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 12px 18px;

	@media ${devices.tabletS} {
		border-radius: 6px;
		padding: 12px;
		max-width: 600px;
	}
`;

export const PostBodyInfoContainer = styled.div`
	grid-area: info;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	background-color: ${props => props.theme.subdued};
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	padding: 8px;

	@media ${devices.mobileL} {
		flex-direction: row;
	}

	@media ${devices.tabletS} {
		border-radius: 6px;
	}

	@media ${devices.tabletM} {
		flex-direction: column;
	}
`;

export const PostBodyCommentContainer = styled.div`
	grid-area: comment;
	justify-self: center;
	width: 100%;
	color: ${props => props.theme.fontColor};

	@media ${devices.tabletS} {
		max-width: 600px;
	}
`;

export const PostBodyCommentH1 = styled.h1`
	margin: 0 0 8px 18px;
	font-size: 1rem;
`;

export const PostBodyTextInnerDiv = styled.div`
	flex-basis: 150px;
	flex-shrink: 0;
`;

export const PostBodyH1 = styled.h1`
	word-break: break-word;
	font-size: 1.2rem;
	padding-bottom: 8px;
`;

export const PostBodyContentDiv = styled.div`
	p {
		font-size: 0.8rem;
		color: ${props => props.theme.fontColor};
		text-indent: 10px;
		line-height: 1.2;
		white-space: pre-wrap;
		margin-top: 6px;
	}
	@media ${devices.tabletM} {
		p {
			font-size: 0.9rem;
		}
	}
`;

export const PostBodyImgDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 2px 0 2px 0;
	position: relative;

	@media ${devices.mobileL} {
		flex-direction: column;
		margin: 0 4px 0 4px;
	}

	@media ${devices.tabletS} {
		flex-direction: row;
		margin: 2px 0 2px 0;
	}
`;

export const PostBodyInfoBlock = styled.div`
	margin: 4px;
	display: flex;
	max-width: 350px;
	flex-direction: column;
	@media ${devices.mobileL} {
	}
`;

export const PostBodyImg = styled.img`
	margin: 0 4px;
	border-radius: 6px;
	height: 100px;
	width: 100px;
	object-fit: cover;
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};

	${props =>
		props.artist &&
		css`
			@media ${devices.tabletS} {
				width: 200px;
				height: 200px;
			}
		`}

	${props =>
		props.album &&
		css`
			@media ${devices.tabletS} {
				height: 75px;
				width: 75px;
				position: absolute;
				bottom: 0;
				left: 0;
			}
		`}

	@media ${devices.mobileL} {
		margin: 4px 0;
	}

	@media ${devices.tabletS} {
		margin: 0 4px;
	}
`;

export const PostBodyInfoMiniDiv = styled.div`
	color: ${props => props.theme.fontColor};
	padding: 6px 0;
`;

export const PostBodyInfoLabelP = styled.p`
	font-size: 0.8rem;
	margin-bottom: 4px;
`;

export const PostBodyInfoP = styled.p`
	font-size: 1rem;
	margin-left: 8px;
`;

export const SinglePostDiv = styled.div`
	padding: 8px 18px;
	background-color: ${props => props.theme.subdued};
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	margin-bottom: 8px;
	display: flex;

	@media ${devices.tabletS} {
		border-radius: 6px;
	}

	@media ${devices.tabletM} {
		padding: 6px;
	}
`;

export const UsernameP = styled.p`
	margin-top: 2px;
	font-size: 0.7rem;
`;

export const CommentFormDiv = styled(SinglePostDiv)`
	margin: 6px 4px;
	display: block;
`;

export const CommentP = styled.p`
	word-break: break-word;
	white-space: normal;
	line-height: 1.1;
	font-size: 0.9rem;
	margin: 12px 0px 4px 12px;
`;

export const EditDeleteButtonDiv = styled.div`
	align-self: center;
	display: flex;
	flex-wrap: nowrap;
	button {
		margin: 0 2px;
	}

	${props =>
		props.body &&
		css`
			margin-right: 12px;
		`}
`;

export const CommentBodyDiv = styled.div`
	width: 100%;
`;

export const CommentBottomBarDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 8px;
`;
