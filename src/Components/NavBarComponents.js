import styled from 'styled-components';

export const NavHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;
	background-color: ${props => props.theme.subdued};
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.highlightMuted};
`;

export const NavButtonDiv = styled.div`
	display: flex;
	align-items: center;

	button {
		margin: 8px;
	}
`;
