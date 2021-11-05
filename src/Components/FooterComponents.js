import styled from 'styled-components';

export const FooterContainer = styled.footer`
	color: #f7f7f7;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
	background-color: #272432;
	width: 100%;
	border-top: 1px solid #a39abc;
`;

export const FooterUserDiv = styled.div`
	margin: 16px;
`;

export const FooterMessageDiv = styled.div`
	margin: 16px;
	width: 200px;
	p {
		font-size: 0.8rem;
	}
`;

export const DeleteUserDiv = styled.div`
	margin-top: 20px;
	p {
		margin-bottom: 8px;
	}
`;
