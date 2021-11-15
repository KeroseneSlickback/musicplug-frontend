import styled, { css } from 'styled-components';
import { devices } from '../Styles/Variables';

export const MainPageContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const PageContainer = styled.div`
	width: 900px;
	margin: 8px;

	@media ${devices.laptopLarge} {
		width: 800px;
	}
	@media ${devices.laptopMedium} {
		width: 700px;
	}
	@media ${devices.laptopSmall} {
		width: 600px;
	}
	@media ${devices.tabletLarge} {
		width: 500px;
	}
	@media ${devices.tabletMedium} {
		width: 400px;
	}
	@media ${devices.tabletSmall} {
		width: 300px;
	}
`;

export const StylePageContainer = styled(PageContainer)`
	background-color: ${props => props.theme.subdued};
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	border-radius: 6px;
`;

export const LoadingPageContainer = styled.div`
	width: 900px;
	margin-top: 8px;
	background-color: ${props => props.theme.subdued};
	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	border-radius: 6px;
`;

export const ModalContainer = styled.div`
	background-color: ${props => props.theme.subdued};
	border-radius: 6px;
	box-shadow: 0 0 3px ${props => props.theme.background};
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
			background-color: ${props => props.theme.background};
			width: 500px;
		`}
`;

export const PostContainer = styled(StylePageContainer)`
	display: flex;
	margin: 8px 0;
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

export const PageInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 32px;
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

	box-shadow: 0px 0px 3px 0px ${props => props.theme.highlightDark};
	border-radius: 6px;
	background-color: ${props => props.theme.subdued};
`;

export const HomePageButtonDiv = styled.div`
	width: 100%;
	padding: 4px 0px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const PaginateDiv = styled.div`
	width: 100%;
`;
