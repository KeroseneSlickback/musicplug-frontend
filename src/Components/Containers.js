import styled, { css } from 'styled-components';

export const MainPageContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const PageContainer = styled.div`
	width: 900px;
	margin: 8px;
`;

export const StylePageContainer = styled(PageContainer)`
	background-color: #272432;
	border: 1px solid #5e5577;
	border-radius: 3px;
`;

export const ModalContainer = styled.div`
	background-color: #272432;
	border-radius: 3px;
	box-shadow: 0 0 3px #141221;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 600px;
	transform: translate(-50%, -50%);
	z-index: 2;

	${props =>
		props.sticky &&
		css`
			position: fixed;
		`}

	${props =>
		props.delete &&
		css`
			position: fixed;
			background-color: #141221;
			width: 500px;
		`}
`;

export const PostContainer = styled(StylePageContainer)`
	display: flex;
	margin: 8px 0;
	flex-direction: column;
	justify-content: space-between;
	&:hover {
		border: 1px solid #a39abc;
	}
	a {
		text-decoration: none;
	}
`;

export const PageInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 32px;
	height: 400px;

	h1 {
		color: #f7f7f7;
		font-size: 2.1rem;
		padding-bottom: 24px;
	}

	h3 {
		color: #f7f7f7;
		font-size: 1.25rem;
		margin-bottom: 8px;
	}
`;

export const CenterPageDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
`;

export const GenreBlockDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: sticky;
	top: 0;
`;

export const NewPostDiv = styled.div`
	width: 700px;
	margin-top: 8px;
	border: 1px solid #5e5577;
	border-radius: 3px;
	background-color: #272432;
`;

export const HomePageButtonDiv = styled.div`
	width: 100%;
	padding: 4px 8px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const PaginateDiv = styled.div`
	width: 100%;
`;
