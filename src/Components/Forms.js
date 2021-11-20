import styled, { css } from 'styled-components';
import { devices } from '../Styles/Variables';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 18px;

	h3 {
		color: ${props => props.theme.fontColor};
		font-size: 1rem;
		margin-bottom: 8px;
	}
`;

export const FormH1 = styled.h1`
	max-width: 400px;
	color: ${props => props.theme.fontColor};
	font-size: 1.6rem;
	padding-bottom: 18px;

	@media ${devices.tabletM} {
		font-size: 2rem;
	}
`;

export const Form = styled.form``;

export const FormBlock = styled.div`
	padding-top: 8px;
	display: flex;
	flex-direction: column;
	h3 {
		text-align: center;
		font-size: 1rem;
	}

	${props =>
		props.spotify &&
		css`
			align-items: center;
			img {
				height: 100px;
			}
		`}

	@media ${devices.tabletS} {
		h3 {
			font-size: 1.4rem;
		}
	}

	@media ${devices.tabletM} {
		h3 {
			font-size: 1.75rem;
		}
	}
`;

export const FormInput = styled.input`
	color: ${props => props.theme.fontColor};
	background-color: ${props => props.theme.subdued};
	border: 1px solid ${props => props.theme.highlightDark};
	border-radius: 6px;
	padding: 4px 6px;
	height: 30px;
	font-size: 0.9rem;

	@media ${devices.tabletS} {
		height: 36px;
		font-size: 1rem;
	}
`;

export const FormLabel = styled.label`
	font-size: 0.8rem;
	padding: 8px 0;
	color: ${props => props.theme.fontColor};

	@media ${devices.tabletS} {
		font-size: 1rem;
	}
`;

export const PostInput = styled.input`
	color: ${props => props.theme.fontColor};
	background-color: ${props => props.theme.subdued};
	border: 1px solid ${props => props.theme.highlightDark};
	border-radius: 6px;
	padding: 4px 6px;
	height: 30px;
	font-size: 0.9rem;
	margin-bottom: 8px;
	@media ${devices.tabletM} {
		font-size: 1rem;
		height: 32px;
	}
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
	height: 180px;
	font-size: inherit;
	white-space: pre-wrap;
	margin: 0;
`;

export const CommentTextLabel = styled.label`
	display: inline-block;
	margin-bottom: 8px;
`;

export const CommentTextArea = styled(PostTextArea)`
	width: 100%;
	height: 80px;
	border: none;
	box-shadow: 0px 0px 2px 0px ${props => props.theme.highlightDark};
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
	border: 1px solid ${props => props.theme.highlightDark};
	border-radius: 6px;
	font-size: 0.8rem;
	height: 28px;
	cursor: pointer;
	color: ${props => props.theme.fontColor};
	margin: 0 0 4px 0;

	@media ${devices.tabletM} {
		height: 32px;
		font-size: 1rem;
	}
`;

export const DropDownArtist = styled.div`
	padding: 4px;
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	border-radius: 6px;
	background-color: ${props => props.theme.subdued};
	color: ${props => props.theme.fontColor};
	display: flex;
	align-items: center;

	img,
	svg {
		border-radius: 6px;
		height: 60px;
		width: 60px;
		object-fit: cover;
	}

	p {
		margin-left: 16px;
		font-size: 1.1rem;
	}

	@media ${devices.tabletS} {
		img,
		svg {
			height: 86px;
			width: 86px;
		}
		p {
			font-size: 1.3rem;
		}
	}
	@media ${devices.tabletL} {
		img,
		svg {
			height: 100px;
			width: 100px;
		}
		p {
			font-size: 1.6rem;
		}
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
			transform: translate3d(0, -3%, 0);
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
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	border-radius: 6px;
	display: grid;
	/* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(150px, 1fr)); */

	grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(80px, 1fr));
	gap: 4px;
	gap: 4px;

	@media ${devices.tabletS} {
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		grid-template-rows: repeat(auto-fill, minmax(120px, 1fr));
	}

	@media ${devices.tabletL} {
		grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
		grid-template-rows: repeat(auto-fill, minmax(130px, 1fr));
	}
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

	img,
	svg {
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
		/* font-size: 1rem; */
		font-size: 0.8rem;
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
			transform: translate3d(0, -3%, 0);
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
	box-shadow: 0px 0px 2px 0px ${props => props.theme.highlightDark};
	border-radius: 6px;
	background-color: ${props => props.theme.subdued};
	color: ${props => props.theme.fontColor};
`;

export const DropDownTrackSingle = styled.div`
	display: grid;
	grid-template-columns: 1fr 20fr;
	align-items: center;
	margin: 0;
	border-radius: 6px;
	padding: 4px 4px;

	${props =>
		props.select &&
		css`
			border-bottom: 2px solid ${props => props.theme.subduedAlt};
		`}

	img, svg {
		border-radius: 6px;
		height: 50px;
		width: 50px;
		object-fit: cover;
	}

	p {
		padding: 6px 0;
		margin: 0 8px;
		font-size: 0.8rem;
	}

	div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	@media ${devices.tabletM} {
		img,
		svg {
			height: 56px;
			width: 56px;
		}
		p {
			font-size: 1rem;
		}
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
			transform: translate3d(0, -3%, 0);
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
	width: 100%;
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
