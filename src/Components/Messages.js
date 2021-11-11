import styled from 'styled-components';

export const MessageContainer = styled.div`
	border-radius: 6px;
	border: 1px solid ${props => props.theme.fontColor};
`;

export const WarningContainer = styled.div`
	border-radius: 6px;
	border: 1px solid ${props => props.theme.fontColor};
	background-color: ${props => props.theme.warning};
	color: ${props => props.theme.fontColor};
	animation: fadeIn 50ms ease-in both;

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
`;

export const ConfirmContainer = styled(WarningContainer)`
	background-color: ${props => props.theme.hero};
`;

export const RegularContainer = styled(WarningContainer)`
	background-color: ${props => props.theme.alternativeAlt};
`;

export const ConfirmCommentMessage = styled(ConfirmContainer)`
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
			padding: 4px;
			transform: translate3d(0, 0, 0);
		}
	}
`;

export const WarningCommentMessage = styled(ConfirmCommentMessage)`
	background-color: ${props => props.theme.warning};
`;
