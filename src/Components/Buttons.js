import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const SmallButton = styled.button`
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	background-color: ${props => props.theme.subdued};
	padding: 8px 16px;
	font-size: 1rem;
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
			background-color: ${props => props.theme.background};
			&:hover {
				background-color: ${props => props.theme.backgroundAlt};
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
			font-size: 0.8rem;
			padding: 6px 8px;
			img {
				height: 18px;
			}
		`}
`;

export const SmallEmptyButton = styled(SmallButton)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px 6px;
	background-color: inherit;
	font-size: 0.8rem;
	svg {
		margin-left: 2px;
	}

	${props =>
		props.body &&
		css`
			&:hover {
				background-color: inherit;
			}
		`}
`;

export const EmptyLikeButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	background-color: inherit;
	border-radius: 6px;
	text-decoration: none;
`;

export const MediumStyledButton = styled(SmallStyledButton)`
	padding: 8px 16px;
	font-size: 1rem;
	border-radius: 6px;

	${props =>
		props.bottom &&
		css`
			margin-top: 24px;
		`}
`;

export const LargeStyledButton = styled(MediumStyledButton)`
	width: 100%;
	text-decoration: none;
`;

export const CloseButtonDiv = styled.div`
	position: absolute;
	top: 32px;
	right: 32px;
`;

export const CloseButton = styled.button`
	background-color: ${props => props.theme.subdued};
	height: 36px;
	width: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	cursor: pointer;

	${props =>
		props.dark &&
		css`
			background-color: ${props => props.theme.subduedAlt};
		`}

	&:hover:after,
	&:hover:before {
		background-color: ${props => props.theme.fontColor};
	}

	&:before,
	&:after {
		position: absolute;
		content: ' ';
		height: 36px;
		width: 4px;
		background-color: ${props => props.theme.highlightWhite};
	}

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}
`;

export const SortDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 28px;
`;

export const SortButton = styled.button`
	color: ${props => props.theme.fontColor};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 0.9rem;
	text-decoration: none;
	border-radius: 6px;
	margin: 1px;
	width: 50%;
	text-align: center;
	background-color: ${props => props.theme.subdued};
	border: 1px solid ${props => props.theme.highlightDark};
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.subduedAlt};
		border: 1px solid ${props => props.theme.highlightMuted};
	}

	&.selected {
		background-color: ${props => props.theme.secondary};
		border: 1px solid ${props => props.theme.highlightDark};

		&:hover {
			background-color: ${props => props.theme.secondaryAlt};
			border: 1px solid ${props => props.theme.highlightMuted};
		}
	}
`;

export const PageButton = styled(MediumStyledButton)`
	padding: 10px 16px;
	margin-left: 12px;

	${props =>
		props.primary &&
		css`
			background-color: ${props => props.theme.primary};
			&:hover {
				background-color: ${props => props.theme.primaryAlt};
			}
		`}
`;

export const SpotifyButton = styled.a`
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
			box-shadow: 0 0 0 0 ${props => props.theme.primaryAlt};
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 4px 32px rgba(0, 0, 0, 0);
			background-color: rgba(0, 0, 0, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
			background-color: ${props => props.theme.secondaryAlt};
		}
	}
`;

export const SmallSpotifyPulseImg = styled.img`
	height: 25px;
	width: 25px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: scale(1);
	animation: pulse 1.25s infinite;

	@keyframes pulse {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 ${props => props.theme.secondaryAlt};
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0px 3px rgba(0, 0, 0, 0);
			background-color: rgba(0, 0, 0, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
			background-color: ${props => props.theme.hero};
		}
	}
`;

export const SmallStyledLinkButton = styled.a`
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	background-color: ${props => props.theme.subdued};
	padding: 8px 16px;
	font-size: 0.8rem;
	border-radius: 6px;
	text-decoration: none;
	display: flex;
	align-items: center;
	img {
		margin-right: 4px;
	}
	&:hover {
		background-color: ${props => props.theme.subduedAlt};
	}
`;

export const SmallStyledReactDomLink = styled(Link)`
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	background-color: ${props => props.theme.subdued};
	padding: 8px 16px;
	font-size: 0.8rem;
	border-radius: 6px;
	text-decoration: none;
	display: flex;
	align-items: center;
	img {
		margin-right: 4px;
	}
	&:hover {
		background-color: ${props => props.theme.subduedAlt};
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
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	align-items: center;
	background-color: ${props => props.theme.primary};
	padding: 8px 16px;
	font-size: 1rem;
	border-radius: 6px;
	img {
		margin-right: 4px;
	}

	&:hover {
		background-color: ${props => props.theme.primaryAlt};
	}
`;

export const WideStyledLinkButton = styled.a`
	color: ${props => props.theme.fontColor};
	border: none;
	cursor: pointer;
	padding: 6px 14px;
	border-radius: 6px;
	text-decoration: none;
	width: 100%;
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
	color: ${props => props.theme.fontColor};
	font-size: 0.7rem;
	padding: 3px 4px;
	border-radius: 6px;
	cursor: pointer;
	background-color: ${props => props.theme.secondary};
	border: 1px solid ${props => props.theme.highlightDark};
	&:hover {
		background-color: ${props => props.theme.secondaryAlt};
		border: 1px solid ${props => props.theme.highlightMuted};
	}

	${props =>
		props.alternative &&
		css`
			background-color: ${props => props.theme.alternative};
			border: 1px solid ${props => props.theme.highlightDark};
			&:hover {
				background-color: ${props => props.theme.alternativeAlt};
				border: 1px solid ${props => props.theme.highlightMuted};
			}
		`}
`;
