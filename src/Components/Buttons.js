import styled, { css } from 'styled-components';

export const SmallButton = styled.button`
	color: #f7f7f7;
	border: none;
	cursor: pointer;
	background-color: #272432;
	padding: 8px 16px;
	font-size: 1.2rem;
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
`;

export const SmallStyledButton = styled(SmallButton)`
	color: #f7f7f7;
	background-color: #a51d62;
	margin: 8px 0;
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

export const MediumStyledButton = styled(SmallStyledButton)`
	padding: 8px 16px;
	font-size: 1rem;
	border-radius: 3px;
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
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 28px;
	width: 100%;
	margin-top: 8px;
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
