import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../Styles/Variables';

export const SmallButton = styled.button`
	color: ${props => props.theme.fontColorAlt};
	border: none;
	cursor: pointer;
	background-color: ${props => props.theme.subdued};
	padding: 6px 12px;
	/* margin: 4px; */
	font-size: 0.8rem;
	border-radius: 6px;
	text-decoration: none;
	&:hover {
		background-color: ${props => props.theme.subduedAlt};
	}
	${props =>
		props.primary &&
		css`
			background-color: ${props => props.theme.alternative};
			&:hover {
				background-color: ${props => props.theme.alternativeAlt};
			}
		`}
	${props =>
		props.delete &&
		css`
			background-color: ${props => props.theme.alternative};
			&:hover {
				background-color: ${props => props.theme.alternativeAlt};
			}
		`}
	${props =>
		props.link &&
		css`
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			p {
				margin-left: 4px;
			}
		`}
`;

export const SmallStyledButton = styled(SmallButton)`
	background-color: ${props => props.theme.secondary};
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	&:hover {
		background-color: ${props => props.theme.secondaryAlt};
	}
	${props =>
		props.primary &&
		css`
			background-color: ${props => props.theme.primary};
			&:hover {
				background-color: ${props => props.theme.primaryAlt};
			}
		`}

	${props =>
		props.smaller &&
		css`
			margin: 2px;
			font-size: 0.7rem;
			padding: 4px 6px;
			svg {
				height: 18px;
				width: 18px;
				opacity: 1;
				animation: fade-in 0.5s;
				@keyframes fade-in {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
			}
		`}
`;

export const SmallEmptyButton = styled(SmallButton)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0px 12px;
	background-color: inherit;
	font-size: 0.7rem;

	color: ${props => props.theme.fontColor};

	svg {
		margin-left: 2px;
		height: 20px;
	}

	${props =>
		props.post &&
		css`
			padding: 0;
			/* justify-self: end; */
			font-size: 0.8rem;
			svg {
				height: 26px;
			}
		`}

	${props =>
		props.body &&
		css`
			&:hover {
				background-color: inherit;
			}
		`}

		@media ${devices.tabletS} {
		svg {
			height: 24px;
		}
	}

	@media ${devices.tabletM} {
		font-size: 0.8rem;
		svg {
			height: 26px;
		}
	}
`;

export const EmptyLikeButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.fontColorAlt};
	border: none;
	cursor: pointer;
	background-color: inherit;
	border-radius: 6px;
	text-decoration: none;
`;

export const MediumStyledButton = styled(SmallStyledButton)`
	margin: 4px;
	padding: 6px 12px;
	font-size: 0.8rem;
	border-radius: 6px;
	font-family: inherit;

	${props =>
		props.bottom &&
		css`
			margin-top: 18px;
			font-size: 0.9rem;
		`}
	@media ${devices.tabletM} {
		padding: 8px 14px;
		font-size: 1rem;
		${props =>
			props.bottom &&
			css`
				margin-top: 18px;
				font-size: 1rem;
			`}
	}
`;

export const LargeStyledButton = styled(MediumStyledButton)`
	width: 100%;
	text-decoration: none;
`;

export const CloseButtonDiv = styled.div`
	position: absolute;
	top: 18px;
	right: 18px;
`;

export const CloseButton = styled.button`
	background-color: ${props => props.theme.subdued};
	height: 18px;
	width: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	cursor: pointer;

	${props =>
		props.dark &&
		css`
			background-color: inherit;
		`}

	&:hover:after,
	&:hover:before {
		background-color: ${props => props.theme.fontColor};
	}

	&:before,
	&:after {
		position: absolute;
		content: ' ';
		height: 18px;
		width: 2px;
		background-color: ${props => props.theme.fontColor};
	}

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}

	@media ${devices.tabletS} {
		height: 26px;
		width: 26px;

		&:before,
		&:after {
			position: absolute;
			content: ' ';
			height: 26px;
			width: 2px;
			background-color: ${props => props.theme.fontColor};
		}
	}
	@media ${devices.tabletM} {
		height: 30px;
		width: 30px;

		&:before,
		&:after {
			position: absolute;
			content: ' ';
			height: 30px;
			width: 2px;
			background-color: ${props => props.theme.fontColor};
		}
	}
`;

export const SortDiv = styled.div`
	padding: 0 18px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@media ${devices.tabletS} {
		padding: 0;
	}
`;

export const SortButton = styled.button`
	color: ${props => props.theme.fontColor};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 0.7rem;
	text-decoration: none;
	border-radius: 6px;
	margin: 1px;
	width: 50%;
	text-align: center;
	background-color: ${props => props.theme.subdued};
	box-shadow: 0 0 3px ${props => props.theme.highlightDark};
	border: none;
	cursor: pointer;
	height: 18px;

	&:hover {
		background-color: ${props => props.theme.subduedAlt};
	}

	&.selected {
		background-color: ${props => props.theme.secondary};
		color: ${props => props.theme.fontColorAlt};

		&:hover {
			background-color: ${props => props.theme.secondaryAlt};
		}
	}

	@media ${devices.tabletS} {
		font-size: 0.85rem;
		height: 20px;
	}
	@media ${devices.tabletL} {
		font-size: 0.9rem;
		height: 24px;
	}
`;

export const PageButton = styled(MediumStyledButton)`
	padding: 6px 12px;
	margin-left: 4px;

	${props =>
		props.primary &&
		css`
			background-color: ${props => props.theme.primary};
			&:hover {
				background-color: ${props => props.theme.primaryAlt};
			}
		`}
`;

export const SpotifyButton = styled.a``;

export const SmallStyledLinkButton = styled.a`
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	background-color: ${props => props.theme.subdued};
	height: 100%;
	padding: 0px 12px;
	font-size: 0.7rem;
	border-radius: 6px;
	text-decoration: none;
	display: flex;
	align-items: center;
	&:hover {
		background-color: ${props => props.theme.subduedAlt};
	}
	@media ${devices.tabletM} {
		font-size: 0.8rem;
	}
`;

export const SmallStyledReactDomLink = styled(Link)`
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	background-color: ${props => props.theme.subdued};
	height: 100%;
	padding: 0px 12px;
	font-size: 0.7rem;
	border-radius: 6px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
	&:hover {
		background-color: ${props => props.theme.subduedAlt};
	}

	@media ${devices.tabletM} {
		font-size: 0.8rem;
	}
`;

export const MediumStyledReactDomLink = styled(Link)`
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	align-items: center;
	img {
		margin-right: 4px;
	}

	background-color: ${props => props.theme.secondary};
	padding: 8px 16px;
	font-size: 1rem;
	border-radius: 6px;

	&:hover {
		background-color: ${props => props.theme.secondaryAlt};
	}
`;

export const MediumStyledReactDomLinkPrimary = styled(Link)`
	margin: 4px;
	color: ${props => props.theme.fontColorAlt};
	border: none;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	align-items: center;
	background-color: ${props => props.theme.primary};
	padding: 7px 14px;
	font-size: 0.8rem;
	border-radius: 6px;
	img {
		margin-right: 4px;
	}

	&:hover {
		background-color: ${props => props.theme.primaryAlt};
	}

	@media ${devices.tabletM} {
		padding: 9px 14px;
		font-size: 1rem;
	}
`;

export const WideStyledLinkButton = styled.a`
	color: ${props => props.theme.fontColorAlt};
	border: none;
	cursor: pointer;
	padding: 6px 14px;
	border-radius: 6px;
	text-decoration: none;
	/* width: 100%; */
	width: 200px;
	background-color: ${props => props.theme.hero};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	font-size: 1rem;
	&:hover {
		background-color: ${props => props.theme.liteHero};
	}
`;

export const TinyButton = styled.button`
	color: ${props => props.theme.fontColorAlt};
	font-size: 0.7rem;
	padding: 4px 6px;
	border-radius: 6px;
	cursor: pointer;
	background-color: ${props => props.theme.secondary};
	border: none;
	&:hover {
		background-color: ${props => props.theme.secondaryAlt};
	}

	${props =>
		props.alternative &&
		css`
			background-color: ${props => props.theme.alternative};
			&:hover {
				background-color: ${props => props.theme.alternativeAlt};
			}
		`}
`;

export const GenreLinkButton = styled(Link)`
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	text-decoration: none;
	box-shadow: 0px 0px 2px 0px ${props => props.theme.highlightDark};
	text-decoration: none;
	font-size: 0.66rem;
	background-color: ${props => props.theme.subdued};
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	&:hover {
		background-color: ${props => props.theme.subduedAlt};
	}

	@media ${devices.mobileL} {
		height: 30px;
		font-size: 0.88rem;
	}

	@media ${devices.tabletS} {
		font-size: 1rem;
		height: 40px;
		width: 100px;
		margin: 4px 0 4px 0;
	}

	@media ${devices.tabletM} {
		font-size: 1rem;
		height: 40px;
		width: 100px;
		margin: 4px 0 4px 0;
	}

	@media ${devices.tabletL} {
		font-size: 1.3rem;
		height: 50px;
		width: 120px;
		margin: 4px 0 4px 0;
	}
`;

export const InactiveUserButton = styled.button`
	display: flex;
	flex-direction: row;
	white-space: nowrap;
	align-items: center;
	font-size: 0.7rem;
	color: ${props => props.theme.fontColor};
	background-color: inherit;
	text-decoration: none;
	border: none;
	cursor: auto;
	margin: 4px 0;
	img {
		height: 20px;
		margin-right: 4px;
		border-radius: 6px;
		box-shadow: 0px 0px 1px 1px ${props => props.theme.highlightWhite};
	}

	${props =>
		props.post &&
		css`
			justify-self: start;
			img {
				height: 26px;
			}
		`}

	${props =>
		props.comment &&
		css`
			height: 36px;
			justify-self: start;
			flex-direction: column;
			img {
				height: 26px;
			}
			p {
				margin-top: 2px;
			}
		`}

		@media ${devices.tabletS} {
		img {
			height: 24px;
		}
	}
	@media ${devices.tabletM} {
		img {
			height: 26px;
		}
	}
`;
