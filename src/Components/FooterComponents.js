import styled from 'styled-components';

export const FooterContainer = styled.footer`
	color: ${props => props.theme.fontColor};
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
	background-color: ${props => props.theme.subdued};
	width: 100%;
	border-top: 1px solid ${props => props.theme.highlightMuted};
	margin-top: auto;
`;

export const FooterUserDiv = styled.div`
	margin: 6px;
`;

export const FooterMessageDiv = styled.div`
	margin: 16px;
	width: 200px;
	p {
		font-size: 0.75rem;
	}
`;

export const DeleteUserDiv = styled.div`
	margin-top: 20px;
	p {
		margin-bottom: 8px;
	}
`;
