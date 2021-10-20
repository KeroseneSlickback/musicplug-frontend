import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 32px;

	h1 {
		color: #f7f7f7;
		font-size: 2.1rem;
		padding-bottom: 24px;
	}

	h3 {
		color: #f7f7f7;
		font-size: 1.25rem;
		margin-bottom: 8px;
	}
`;

export const Form = styled.form``;

export const FormBlock = styled.div`
	padding-top: 12px;
	display: flex;
	flex-direction: column;

	${props =>
		props.spotify &&
		css`
			align-items: center;

			a {
				margin: 48px 0px 36px 0px;
				height: 100px;
				width: 100px;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				transform: scale(1);
				animation: pulse 1.25s infinite;
				@keyframes pulse {
				0% {
					transform: scale(0.95);
					box-shadow: 0 0 0 0  #cf2e7d;
				}

				70% {
					transform: scale(1);
					box-shadow: 0 0 4px 32px rgba(0, 0, 0, 0);
					background-color:rgba(0, 0, 0, 0); 
				}

				100% {
					transform: scale(0.95);
					box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
					background-color: #b42269;
				}
			}

			img {
				height: 100px;
			}
		`}
`;

export const FormInput = styled.input`
	color: #f7f7f7;
	background-color: #272432;
	border: 2px solid #5e5577;
	border-radius: 3px;
	padding: 4px 6px;
	height: 38px;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	font-size: 1.1rem;
	padding: 8px 0;
	color: #bababa;
`;

export const PostInput = styled.input`
	color: #f7f7f7;
	background-color: #272432;
	border: 2px solid #5e5577;
	border-radius: 3px;
	padding: 4px 6px;
	height: 38px;
	font-size: 1rem;
	margin-bottom: 8px;
`;

export const PostTextArea = styled(PostInput).attrs({
	as: 'textarea',
})`
	height: 140px;
	font-family: inherit;
	font-size: inherit;
`;

export const PostLabel = styled.label`
	margin-bottom: 12px;
	color: #f7f7f7;
	font-size: 1.3rem;
`;

export const PostSelect = styled.select`
	width: 150px;
	background-color: #272432;
	border: 2px solid #5e5577;
	border-radius: 3px;
	font-size: 1rem;
	height: 38px;
	cursor: pointer;
	color: #f7f7f7;
`;

export const DropDownArtist = styled.div`
	padding: 4px;
	border: 2px solid #2e2b3b;
	border-radius: 3px;
	background-color: #272432;
	color: #f7f7f7;
	display: flex;
	align-items: center;

	img {
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
		background-color: #2e2b3b;
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
	border: 2px solid #2e2b3b;
	border-radius: 3px;
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
		font-size: 1.1rem;
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
	padding: 0 4px;
	border: 2px solid #2e2b3b;
	border-radius: 3px;
	background-color: #272432;
	color: #f7f7f7;
`;

export const DropDownTrackSingle = styled.div`
	display: grid;
	grid-template-columns: 58px 1fr;
	align-items: center;
	margin: 2px 0;
	padding: 4px 0;

	${props =>
		props.select &&
		css`
			border-bottom: 2px solid #2e2b3b;
		`}

	img {
		height: 50px;
		width: 50px;
		object-fit: cover;
		margin: 0 4px;
	}

	p {
		padding: 6px 0;
		margin: 0 8px 0 8px;
		font-size: 1.1rem;
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
		background-color: #2e2b3b;
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

	${props =>
		props.fade &&
		css`
			opacity: 0;
			animation: fade-in-out 500ms ease-in-out infinite;
			@keyframes fade-in-out {
				0% {
					opacity: 0;
				}
				50% {
					opacity: 0.5;
				}
				100% {
					opacity: 0;
				}
			}
		`}
`;
