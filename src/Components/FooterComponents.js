import styled from 'styled-components';

export const FooterContainer = styled.footer`
	color: ${props => props.theme.fontColor};
	display: flex;
	align-items: center;
	justify-content: flex-end;
	/* flex-wrap: wrap; */
	background-color: ${props => props.theme.subdued};
	width: 100%;
	/* padding: 0 18px; */
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	margin-top: auto;
`;

export const FooterUserDiv = styled.div`
	margin: 4px;
`;

export const FooterMessageDiv = styled.div`
	max-width: 200px;
	p {
		font-size: 0.7rem;
	}
`;

export const DeleteUserDiv = styled.div`
	margin-top: 20px;
	p {
		margin-bottom: 8px;
	}
`;
