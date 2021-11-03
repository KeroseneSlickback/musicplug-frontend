import styled, { css } from 'styled-components';
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
		word-break: break-word;
		font-size: 1.6rem;
		padding-bottom: 8px;
	}

	p {
		font-size: 1rem;
		color: #f7f7f7;
		text-indent: 20px;
		line-height: 1.2;
		white-space: pre-wrap;
		margin-top: 6px;
	}
`;

export const PostBottomDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 4px 8px;
`;

export const PostUserDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	img {
		margin: 4px 4px;
		width: 34px;
		border-radius: 3px;
		border: 1px solid #ebeaee;
	}
	p {
		font-size: 0.8rem;
		color: #f7f7f7;
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
				width: 28px;
			}
		`}
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

export const PostBodyContainer = styled.div`
	width: 900px;
`;

export const PostBodyGridContainer = styled.div`
	padding: 8px;
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-template-rows: auto 1fr;
	grid-template-areas:
		'body info'
		'comment info';
	align-items: start;
	gap: 8px;
`;

export const PostBodyTextDiv = styled.div`
	grid-area: body;
	justify-self: stretch;
	background-color: #272432;
	border: 1px solid #5e5577;
	border-radius: 3px;
	width: 100%;
	color: #f7f7f7;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const PostBodyInfoContainer = styled.div`
	grid-area: info;
	width: 250px;
	padding: 8px;
	background-color: #272432;
	border: 1px solid #5e5577;
	border-radius: 3px;
`;

export const PostBodyCommentContainer = styled.div`
	grid-area: comment;
	width: 100%;
	color: #f7f7f7;
	h1 {
		margin-bottom: 8px;
		font-size: 1.3rem;
	}
`;

export const PostBodyTextInnerDiv = styled.div`
	padding: 16px 16px 0px 16px;
	flex-basis: 150px;
	flex-shrink: 0;
`;

export const PostBodyH1 = styled.h1`
	word-break: break-word;
	font-size: 1.6rem;
	padding-bottom: 8px;
`;

export const PostBodyContentDiv = styled.div`
	p {
		font-size: 1rem;
		color: #f7f7f7;
		text-indent: 20px;
		line-height: 1.2;
		white-space: pre-wrap;
		margin-top: 6px;
	}
`;

export const PostBodyImgDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const PostBodyImg = styled.img`
	height: 112px;
	width: 112px;
	object-fit: cover;
	box-shadow: 0px 0px 0px 2px #5e5577;
`;

export const PostBodyInfoMiniDiv = styled.div`
	color: #f7f7f7;
	padding: 6px 0;
`;

export const PostBodyInfoLabelP = styled.p`
	font-size: 0.8rem;
	margin-bottom: 4px;
`;

export const PostBodyInfoP = styled.p`
	font-size: 1.1rem;
	margin-left: 8px;
`;

export const PostBodyButtonDiv = styled.div``;

export const SinglePostDiv = styled.div`
	padding: 8px;
	background-color: #211f2e;
	border: 1px solid #5e5577;
	border-radius: 3px;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
`;

export const CommentFormDiv = styled(SinglePostDiv)`
	display: block;
`;

export const CommentP = styled.p`
	line-height: 1.1;
	margin-left: 8px;
`;

export const EditDeleteButtonDiv = styled.div`
	button {
		margin: 0 2px;
	}
`;

export const CommentBodyDiv = styled.div`
	width: 100%;
`;

export const CommentBottomBarDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 8px;
`;
