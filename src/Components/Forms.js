import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 32px;

	h3 {
		color: ${props => props.theme.fontColor};
		font-size: 1rem;
		margin-bottom: 8px;
	}
`;

export const FormH1 = styled.h1`
	color: ${props => props.theme.fontColor};
	font-size: 2.2rem;
	padding-bottom: 24px;
`;

export const Form = styled.form``;

export const FormBlock = styled.div`
	padding-top: 12px;
	display: flex;
	flex-direction: column;
	h3 {
		font-size: 1.75rem;
	}

	${props =>
		props.spotify &&
		css`
			align-items: center;
			img {
				height: 100px;
			}
		`}
`;

export const FormInput = styled.input`
	color: ${props => props.theme.fontColor};
	background-color: ${props => props.theme.subdued};
	border: 2px solid ${props => props.theme.highlightDark};
	border-radius: 6px;
	padding: 4px 6px;
	height: 38px;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	font-size: 1.1rem;
	padding: 8px 0;
	color: ${props => props.theme.highlightWhite};
`;

export const PostInput = styled.input`
	color: ${props => props.theme.fontColor};
	background-color: ${props => props.theme.subdued};
	border: 2px solid ${props => props.theme.highlightDark};
	border-radius: 6px;
	padding: 4px 6px;
	height: 38px;
	font-size: 1rem;
	margin-bottom: 8px;
`;

export const PostInputRadioDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const PostInputRadio = styled(PostInput)`
	margin: 10px;
`;

export const PostTextArea = styled(PostInput).attrs({
	as: 'textarea',
})`
	height: 140px;
	font-size: inherit;
	white-space: pre-wrap;
`;

export const CommentTextLabel = styled.label`
	display: inline-block;
	margin-bottom: 8px;
`;

export const CommentTextArea = styled(PostTextArea)`
	width: 100%;
	height: 80px;
	background-color: ${props => props.theme.subdued};
`;

export const CommentButtonDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

export const PostLabel = styled.label`
	margin-bottom: 12px;
	color: ${props => props.theme.fontColor};
	font-size: 1.1rem;
`;

export const PostSelect = styled.select`
	width: 150px;
	background-color: ${props => props.theme.subdued};
	border: 2px solid ${props => props.theme.highlightDark};
	border-radius: 6px;
	font-size: 1rem;
	height: 38px;
	cursor: pointer;
	color: ${props => props.theme.fontColor};
`;

export const DropDownArtist = styled.div`
	padding: 4px;
	border: 2px solid ${props => props.theme.subduedAlt};
	border-radius: 6px;
	background-color: ${props => props.theme.subdued};
	color: ${props => props.theme.fontColor};
	display: flex;
	align-items: center;

	img {
		border-radius: 6px;
		height: 100px;
		width: 100px;
		object-fit: cover;
	}

	p {
		margin-left: 16px;
		font-size: 1.6rem;
	}
`;

export const DropDownArtistSelect = styled(DropDownArtist)`
	cursor: pointer;
	&:hover {
		background-color: ${props => props.theme.subduedAlt};
	}
	animation: fadeIn 200ms ease-in both;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translate3d(0, -10%, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	&:nth-child(1) {
		animation-delay: 100ms;
	}
	&:nth-child(2) {
		animation-delay: 200ms;
	}
	&:nth-child(3) {
		animation-delay: 300ms;
	}
`;

export const DropDownAlbumDiv = styled.div`
	padding: 4px;
	border: 2px solid ${props => props.theme.subduedAlt};
	border-radius: 6px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
	gap: 4px;
`;

export const DropDownAlbumSingle = styled.div`
	position: relative;
	text-align: center;
	overflow: hidden;

	&:after {
		content: '';
		position: absolute;
		border-radius: 6px;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.1);
		background-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.4),
			rgba(0, 0, 0, 0.2) 50%,
			rgba(0, 0, 0, 0.4) 100%
		);
	}

	img {
		border-radius: 6px;
		height: 100%;
		max-width: 100%;
		object-fit: cover;
	}

	p {
		text-overflow: ellipsis;
		z-index: 2;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 1rem;
	}

	&:hover {
		&:after {
			background-color: rgba(0, 0, 0, 0.6);

			background-image: linear-gradient(
				to top,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.2) 60%,
				rgba(0, 0, 0, 0.4) 100%
			);
		}
	}
`;

export const DropDownAlbumSelect = styled(DropDownAlbumSingle)`
	cursor: pointer;
	animation: fadeIn 200ms ease-in both;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translate3d(0, -10%, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	&:nth-child(n + 1) {
		animation-delay: 50ms;
	}
	&:nth-child(n + 5) {
		animation-delay: 100ms;
	}
	&:nth-child(n + 10) {
		animation-delay: 150ms;
	}
	&:nth-child(n + 15) {
		animation-delay: 200ms;
	}
	&:nth-child(n + 20) {
		animation-delay: 250ms;
	}
	&:nth-child(n + 25) {
		animation-delay: 300ms;
	}
`;

export const DropDownTrackDiv = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid ${props => props.theme.subduedAlt};
	border-radius: 6px;
	background-color: ${props => props.theme.subdued};
	color: ${props => props.theme.fontColor};
`;

export const DropDownTrackSingle = styled.div`
	display: grid;
	grid-template-columns: 58px 1fr;
	align-items: center;
	margin: 0;
	border-radius: 6px;
	padding: 4px 4px;

	${props =>
		props.select &&
		css`
			border-bottom: 2px solid ${props => props.theme.subduedAlt};
		`}

	img {
		border-radius: 6px;
		height: 50px;
		width: 50px;
		object-fit: cover;
		margin: 0 4px;
	}

	p {
		padding: 6px 0;
		margin: 0 8px;
		font-size: 1rem;
	}

	div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const DropDownTrackSelect = styled(DropDownTrackSingle)`
	cursor: pointer;
	&:hover {
		background-color: ${props => props.theme.subduedAlt};
	}
	animation: fadeIn 100ms ease-in both;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translate3d(0, -10%, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	&:nth-child(n + 1) {
		animation-delay: 50ms;
	}
`;

export const CenteredModuleDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;

	h1 {
		font-size: 2rem;
		color: ${props => props.theme.fontColor};
	}

	${props =>
		props.fade &&
		css`
			opacity: 0;
			animation: fade-in-out 350ms ease-out infinite;
			@keyframes fade-in-out {
				0% {
					opacity: 0;
				}
				50% {
					opacity: 0.25;
				}
				100% {
					opacity: 0;
				}
			}
		`}
`;

export const PostPatchDiv = styled.div`
	margin: 0 8px;
`;
