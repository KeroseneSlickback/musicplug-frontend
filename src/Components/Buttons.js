import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const SmallButton = styled.button`
	color: #f7f7f7;
	border: none;
	cursor: pointer;
	background-color: #272432;
	padding: 8px 16px;
	font-size: 1rem;
	border-radius: 3px;
	text-decoration: none;
	&:hover {
		background-color: #2e2b3b;
	}
	${props =>
		props.primary &&
		css`
			background-color: #301f33;
			&:hover {
				background-color: #422843;
			}
		`}
	${props =>
		props.delete &&
		css`
			background-color: #141221;
			&:hover {
				background-color: #211f2e;
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
	color: #f7f7f7;
	background-color: #a51d62;
	display: flex;
	align-items: center;
	&:hover {
		background-color: #b42269;
	}
	${props =>
		props.primary &&
		css`
			background-color: #c52772;
			&:hover {
				background-color: #cf2e7d;
			}
		`}

	${props =>
		props.smaller &&
		css`
			font-size: 0.9rem;
			padding: 6px 8px;
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
	color: #f7f7f7;
	border: none;
	cursor: pointer;
	background-color: inherit;
	border-radius: 3px;
	text-decoration: none;
`;

export const MediumStyledButton = styled(SmallStyledButton)`
	padding: 8px 16px;
	font-size: 1rem;
	border-radius: 3px;

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
	background-color: #272432;
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
			background-color: #141221;
		`}

	&:hover:after,
	&:hover:before {
		background-color: #f7f7f7;
	}

	&:before,
	&:after {
		position: absolute;
		content: ' ';
		height: 36px;
		width: 4px;
		background-color: #bababa;
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
	color: #f7f7f7;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 0.9rem;
	text-decoration: none;
	border-radius: 3px;
	margin: 1px;
	width: 50%;
	text-align: center;
	background-color: #272432;
	border: 1px solid #5e5577;
	cursor: pointer;

	&:hover {
		background-color: #2e2b3b;
		border: 1px solid #a39abc;
	}

	&.selected {
		background-color: #a51d62;
		border: 1px solid #5e5577;

		&:hover {
			background-color: #b42269;
			border: 1px solid #a39abc;
		}
	}
`;

export const PageButton = styled(MediumStyledButton)`
	padding: 10px 16px;
	margin-left: 12px;

	${props =>
		props.primary &&
		css`
			background-color: #c52772;
			&:hover {
				background-color: #cf2e7d;
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
			box-shadow: 0 0 0 0 #cf2e7d;
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 4px 32px rgba(0, 0, 0, 0);
			background-color: rgba(0, 0, 0, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
			background-color: #b42269;
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
			box-shadow: 0 0 0 0 #b42269;
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0px 3px rgba(0, 0, 0, 0);
			background-color: rgba(0, 0, 0, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
			background-color: #4ac09b;
		}
	}
`;

export const SmallStyledLinkButton = styled.a`
	color: #f7f7f7;
	border: none;
	cursor: pointer;
	background-color: #272432;
	padding: 8px 16px;
	font-size: 0.8rem;
	border-radius: 3px;
	text-decoration: none;
	display: flex;
	align-items: center;
	img {
		margin-right: 4px;
	}
	&:hover {
		background-color: #2e2b3b;
	}
`;

export const SmallStyledReactDomLink = styled(Link)`
	color: #f7f7f7;
	border: none;
	cursor: pointer;
	background-color: #272432;
	padding: 8px 16px;
	font-size: 0.8rem;
	border-radius: 3px;
	text-decoration: none;
	display: flex;
	align-items: center;
	img {
		margin-right: 4px;
	}
	&:hover {
		background-color: #2e2b3b;
	}
`;

export const MediumStyledReactDomLink = styled(SmallStyledReactDomLink)`
	background-color: #a51d62;
	padding: 8px 16px;
	font-size: 1.08rem;
	border-radius: 3px;

	&:hover {
		background-color: #b42269;
	}
	${props =>
		props.primary &&
		css`
			background-color: #c52772;
			&:hover {
				background-color: #cf2e7d;
			}
		`}
`;

export const WideStyledLinkButton = styled.a`
	color: #f7f7f7;
	border: none;
	cursor: pointer;
	padding: 6px 14px;
	border-radius: 3px;
	text-decoration: none;
	width: 100%;
	background-color: #4ac09b;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	font-size: 1.1rem;
	&:hover {
		background-color: #59c5a3;
	}
`;

export const TinyButton = styled.button`
	color: #f7f7f7;
	font-size: 0.7rem;
	padding: 3px 4px;
	border-radius: 3px;
	cursor: pointer;
	background-color: #a51d62;
	border: 1px solid #5e5577;
	&:hover {
		background-color: #b42269;
		border: 1px solid #a39abc;
	}

	${props =>
		props.alternative &&
		css`
			background-color: #301f33;
			border: 1px solid #5e5577;
			&:hover {
				background-color: #422843;
				border: 1px solid #a39abc;
			}
		`}
`;
