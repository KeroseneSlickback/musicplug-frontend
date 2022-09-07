import styled, { css } from "styled-components";
import { devices } from "../Styles/Variables";

export const ContentContainer = styled.main`
  width: 100%;
  @media ${devices.tabletS} {
    max-width: 800px;
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
    padding: 0.5rem;
    border-radius: 0.325rem;
  }
`;

export const StylePageContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.subdued};
  box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightDark};

  ${(props) =>
    props.margin &&
    css`
      @media ${devices.tabletS} {
        margin: 0.5rem;
      }
    `}
`;

export const LoadingPageContainer = styled.div`
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.subdued};
  box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightDark};
  @media ${devices.tabletS} {
    border-radius: 0.325rem;
  }
`;

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.subdued};
  border-radius: 0.325rem;
  box-shadow: 0 0 3px ${(props) => props.theme.background};
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  z-index: 2;

  ${(props) =>
    props.sticky &&
    css`
      position: fixed;
    `}

  ${(props) =>
    props.delete &&
    css`
      width: 30px;
      position: fixed;
      background-color: ${(props) => props.theme.background};
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
  margin-top: 0.5rem;
  padding: 0.125rem 0 0 0;
  flex-direction: column;
  justify-content: space-between;

  /* animation: fadeIn 250ms ease-in both;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translate3d(0, -1%, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	} */
  &:hover {
    box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightMuted};
  }
  a {
    text-decoration: none;
  }

  @media ${devices.tabletS} {
    padding: 0px;
    border-radius: 0.325rem;
  }
`;

export const PostListContainer = styled.div``;

export const PageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.125rem;
  height: 400px;

  h1 {
    color: ${(props) => props.theme.fontColor};
    font-size: 2rem;
    padding-bottom: 24px;
  }

  h3 {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
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
    padding: 0 1.125rem;
  }
`;

export const GenreBlockDiv = styled.div`
  padding: 0 1.125rem;
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
  grid-gap: 0.5rem;
  margin: 0.5rem;
  align-items: center;
  justify-items: stretch;

  @media ${devices.tabletS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.25rem 0;
    grid-gap: 0;
    margin: 0;
  }
`;

export const NewPostDiv = styled.div`
  width: 700px;
  margin-top: 0.5rem;
  box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightDark};
  border-radius: 0.325rem;
  background-color: ${(props) => props.theme.subdued};
`;

export const HomePageButtonDiv = styled.div`
  width: 100%;
  padding: 0.125rem 1.125rem 0.25rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${devices.tabletS} {
    padding: 0.5rem 0 0 0;
  }
`;

export const PaginateDiv = styled.div``;
