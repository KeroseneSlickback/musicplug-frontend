import styled from 'styled-components';

export const NewPostDiv = styled.div`
	a {
		text-decoration: none;
		color: ${props => props.theme.fontColor};
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${props => props.theme.primary};
		border-radius: 6px;
		border: 3px solid ${props => props.theme.highlightMuted};
		font-size: 1.6rem;
		margin-top: 8px;
		height: 80px;
		width: 150px;

		&:hover {
			background-color: ${props => props.theme.primaryAlt};
			border: 3px solid ${props => props.theme.highlightWhite};
		}
	}
`;

export const GenreTabDiv = styled.div`
	a {
		color: ${props => props.theme.fontColor};
		text-decoration: none;
		font-size: 1.4rem;
		margin-top: 8px;
		background-color: ${props => props.theme.subdued};
		height: 50px;
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
		&:hover {
			background-color: ${props => props.theme.subduedAlt};
		}
	}
`;
