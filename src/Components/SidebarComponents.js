import styled from 'styled-components';

export const NewPostDiv = styled.div`
	a {
		text-decoration: none;
		color: #f7f7f7;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #c52772;
		border-radius: 6px;
		border: 3px solid #a39abc;
		font-size: 1.6rem;
		margin-top: 8px;
		height: 80px;
		width: 150px;

		&:hover {
			background-color: #cf2e7d;
			border: 3px solid #ebeaee;
		}
	}
`;

export const GenreTabDiv = styled.div`
	a {
		color: #f7f7f7;
		text-decoration: none;
		font-size: 1.4rem;
		margin-top: 8px;
		background-color: #272432;
		height: 50px;
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
		&:hover {
			background-color: #2e2b3b;
		}
	}
`;
