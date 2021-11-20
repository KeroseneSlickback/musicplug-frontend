import styled, { css } from 'styled-components';
import { devices } from '../Styles/Variables';

export const ContentContainer = styled.main`
	width: 100%;
	@media ${devices.tabletS} {
		/* margin: 0 16px 0 0; */
		max-width: 750px;
	}
`;

export const MainPageContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PageContainer = styled.div`
	@media ${devices.tabletS} {
		padding: 8px;
		border-radius: 6px;
	}
`;

export const StylePageContainer = styled(PageContainer)`
	/* width: 100%; */
	background-color: ${props => props.theme.subdued};
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};

	${props =>
		props.margin &&
		css`
			@media ${devices.tabletS} {
				margin: 8px;
			}
		`}
`;

export const LoadingPageContainer = styled.div`
	margin-top: 8px;
	background-color: ${props => props.theme.subdued};
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	@media ${devices.tabletS} {
		/* width: 100%; */
		border-radius: 6px;
	}
`;

export const ModalContainer = styled.div`
	background-color: ${props => props.theme.subdued};
	border-radius: 6px;
	box-shadow: 0 0 3px ${props => props.theme.background};
	position: fixed;
	top: 50%;
	left: 50%;
	width: 300px;
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
			width: 30px;
			position: fixed;
			background-color: ${props => props.theme.background};
		`}

		@media ${devices.tabletS} {
		width: 400px;
	}
	@media ${devices.tabletM} {
		width: 500px;
	}
`;

export const PostContainer = styled(StylePageContainer)`
	display: flex;
	margin-top: 8px;
	padding: 0;
	flex-direction: column;
	justify-content: space-between;

	animation: fadeIn 250ms ease-in both;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translate3d(0, -3%, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
	&:hover {
		box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightMuted};
	}
	a {
		text-decoration: none;
	}
`;

export const PostListContainer = styled.div``;

export const PageInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 18px;
	height: 400px;

	h1 {
		color: ${props => props.theme.fontColor};
		font-size: 2rem;
		padding-bottom: 24px;
	}

	h3 {
		color: ${props => props.theme.fontColor};
		font-size: 1.2rem;
		margin-bottom: 8px;
	}
`;

export const CenterPageDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media ${devices.tabletS} {
		align-items: flex-start;
		flex-direction: row;
		padding: 0 18px;
	}
`;

export const GenreBlockDiv = styled.div`
	padding: 0 18px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media ${devices.tabletS} {
		width: auto;
		padding: 0;
		position: sticky;
		top: 0;
	}
`;

export const GenreContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 8px;
	margin: 8px;
	align-items: center;
	justify-items: stretch;

	@media ${devices.tabletS} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4px 0;
		grid-gap: 0;
		margin: 0;
	}
`;

export const NewPostDiv = styled.div`
	width: 700px;
	margin-top: 8px;
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	border-radius: 6px;
	background-color: ${props => props.theme.subdued};
`;

export const HomePageButtonDiv = styled.div`
	width: 100%;
	padding: 2px 18px 4px 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media ${devices.tabletS} {
		padding: 8px 0 0 0;
	}
`;

export const PaginateDiv = styled.div``;
