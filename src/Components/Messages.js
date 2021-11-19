import styled from 'styled-components';
import { devices } from '../Styles/Variables';

export const MessageContainer = styled.div`
	border-radius: 6px;
	border: 1px solid ${props => props.theme.fontColor};
`;

export const WarningContainer = styled.div`
	border-radius: 6px;
	box-shadow: 0px 0px 2px 0px ${props => props.theme.highlightDark};
	background-color: ${props => props.theme.warning};
	color: ${props => props.theme.fontColorAlt};
	animation: fadeIn 50ms ease-in both;

	p {
		text-align: center;
		font-size: 0.8rem;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
			margin: 0;
			padding: 0;
			transform: translate3d(0, -10%, 0);
		}
		to {
			opacity: 1;
			margin: 8px 0;
			padding: 8px;
			transform: translate3d(0, 0, 0);
		}
	}

	@media ${devices.tabletS} {
		p {
			font-size: 0.9rem;
		}
	}
	@media ${devices.tabletM} {
		p {
			font-size: 1rem;
		}
	}
`;

export const ConfirmContainer = styled(WarningContainer)`
	background-color: ${props => props.theme.hero};
`;

export const RegularContainer = styled(WarningContainer)`
	background-color: ${props => props.theme.alternativeAlt};
`;

export const ConfirmCommentMessage = styled(ConfirmContainer)`
	@keyframes fadeIn {
		from {
			opacity: 0;
			margin: 0;
			padding: 0;
			transform: translate3d(0, -10%, 0);
		}
		to {
			opacity: 1;
			margin: 8px 0;
			padding: 4px;
			transform: translate3d(0, 0, 0);
		}
	}
`;

export const WarningCommentMessage = styled(ConfirmCommentMessage)`
	background-color: ${props => props.theme.warning};
`;
