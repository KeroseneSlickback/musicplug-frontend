import styled from 'styled-components';

export const NavHeader = styled.header`
	padding: 0 18px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;
	background-color: ${props => props.theme.subdued};
	width: 100vw;
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
`;

export const NavButtonDiv = styled.div`
	display: flex;
	align-items: center;
`;
