import styled from 'styled-components';

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
`;

export const PageContainer = styled.div`
	/* display: flex;
	flex-direction: column;
	justify-content: space-between; */
	background-color: #272432;
	width: 900px;
	margin-top: 8px;
	border: 1px solid #5e5577;
	border-radius: 3px;
`;

export const PostContainer = styled(PageContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&:hover {
		border: 1px solid #a39abc;
	}
	a {
		text-decoration: none;
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
