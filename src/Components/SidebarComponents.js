import styled from 'styled-components';

export const NewPostDiv = styled.div`
	a {
		text-decoration: none;
		color: ${props => props.theme.fontColorAlt};
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${props => props.theme.primary};
		border-radius: 6px;
		box-shadow: 0px 0px 3px 1px ${props => props.theme.highlightDark};
		font-size: 1.6rem;
		margin-top: 8px;
		height: 80px;
		width: 150px;

		&:hover {
			background-color: ${props => props.theme.primaryAlt};
			box-shadow: 0px 0px 3px 1px ${props => props.theme.highlightMuted};
		}
	}
`;

export const GenreTabDiv = styled.div`
	a {
		color: ${props => props.theme.fontColor};

		box-shadow: 0px 0px 2px 0px ${props => props.theme.highlightDark};
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
