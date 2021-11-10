import styled from 'styled-components';

export const MessageContainer = styled.div`
	border-radius: 6px;
	border: 1px solid #f7f7f7;
`;

export const WarningContainer = styled.div`
	border-radius: 6px;
	border: 1px solid #f7f7f7;
	background-color: #9b0832;
	color: #f7f7f7;
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

	&:nth-child(n + 1) {
		animation-delay: 50ms;
	}
`;
