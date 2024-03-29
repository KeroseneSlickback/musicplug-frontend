import styled, { css } from "styled-components";
import { SmallButton } from "./Buttons";
import { devices } from "../Styles/Variables";

export const PostTopDiv = styled.div`
  padding: 0 1.125rem;
  background-color: ${(props) => props.theme.subdued};
  &:hover {
    background-color: ${(props) => props.theme.subduedAlt};
  }
  a {
    color: ${(props) => props.theme.fontColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.25rem 0;
  }

  @media ${devices.tabletS} {
    padding: 0 0.5rem;
    border-radius: 0.325rem;
    a {
      padding: 0.5rem 0 0 0;
    }
  }
`;

export const PostImg = styled.img`
  max-height: 75px;
  width: 75px;
  border-radius: 0.325rem;
  box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightDark};
  margin: 0.125rem 0 0.125rem;
  @media ${devices.tabletS} {
    max-height: 100px;
    width: 100px;
  }

  @media ${devices.tabletM} {
    max-height: 120px;
    width: 120px;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.25rem;
  overflow: hidden;
  mask-image: linear-gradient(180deg, #000 80%, transparent);
  max-height: 250px;

  h3 {
    word-break: break-word;
    font-size: 1rem;
    padding-bottom: 0.125rem;
  }

  h5 {
    font-weight: 400;
    font-size: 0.7rem;
    margin: 0.25rem 0 0.325rem 1rem;
  }

  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.fontColor};
    text-indent: 0.625rem;
    line-height: 1;
    white-space: pre-wrap;
    margin-top: 0.125rem;
    padding: 0 0.25rem;
  }

  @media ${devices.tabletM} {
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`;

export const PostViewImgUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostUserDiv = styled.div`
  background-color: red;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0;
  img {
    margin-right: 0.25rem;
    width: 34px;
    border-radius: 0.325rem;
    box-shadow: 0px 0px 1px 1px ${(props) => props.theme.highlightWhite};
  }
  p {
    font-size: 0.7rem;
    color: ${(props) => props.theme.fontColor};
    white-space: nowrap;
  }

  ${(props) =>
    props.comment &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.small &&
    css`
      img {
        width: 20px;
      }
    `}
`;

export const PostButtonDiv = styled.div`
  height: 26px;
  width: 100%;
  display: grid;
  grid-gap: 0.125rem;
  grid-template-columns: 70px 60px 100px 40px;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  margin: 0.25rem 0;

  input {
    height: 20px;
  }

  @media ${devices.mobileL} {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media ${devices.tabletS} {
    padding: 0;
  }

  @media ${devices.tabletM} {
    width: 100%;
    height: 35px;
  }
`;

export const PostBodyButtonDiv = styled.div`
  display: grid;
  grid-gap: 0.125rem;
  grid-template-rows: 1fr;
  justify-items: center;
  height: auto;
  margin: 0;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
`;

export const PostBodyRightButtonDiv = styled.div`
  justify-self: end;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
`;

export const PostCommentButton = styled(SmallButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    margin-left: 0.325rem;
  }
`;

export const PostBodyContainer = styled.div`
  @media ${devices.tabletS} {
    padding: 0.5rem;
  }
  @media ${devices.tabletM} {
    padding: 0;
  }
`;

export const PostBodyGridContainer = styled.div`
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  justify-items: center;
  grid-template-areas:
    "body"
    "info"
    "comment";
  gap: 0.5rem;

  @media ${devices.tabletM} {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "body info"
      "comment info";
    align-items: start;
    gap: 0.5rem;
  }
`;

export const PostBodyTextDiv = styled.div`
  grid-area: body;
  justify-self: center;
  background-color: ${(props) => props.theme.subdued};
  box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightDark};
  width: 100%;
  color: ${(props) => props.theme.fontColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem 1rem 0.5rem 1rem;

  @media ${devices.tabletS} {
    border-radius: 0.325rem;
    padding: 0.75rem 0.75rem 0.5rem 0.75rem;
    max-width: 600px;
  }
`;

export const PostBodyInfoContainer = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: ${(props) => props.theme.subdued};
  box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightDark};
  padding: 0.5rem;

  @media ${devices.mobileL} {
    flex-direction: row;
  }

  @media ${devices.tabletS} {
    border-radius: 0.325rem;
  }

  @media ${devices.tabletM} {
    flex-direction: column;
  }
`;

export const PostBodyCommentContainer = styled.div`
  grid-area: comment;
  justify-self: center;
  width: 100%;
  color: ${(props) => props.theme.fontColor};

  @media ${devices.tabletS} {
    max-width: 600px;
  }
`;

export const PostBodyCommentH1 = styled.h1`
  margin: 0 0 0.5rem 1.125rem;
  font-size: 1rem;
`;

export const PostBodyTextInnerDiv = styled.div`
  flex-basis: 150px;
  flex-shrink: 0;
`;

export const PostBodyH1 = styled.h1`
  word-break: break-word;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
`;

export const PostBodyContentDiv = styled.div`
  p {
    font-size: 1rem;
    color: ${(props) => props.theme.fontColor};
    text-indent: 0.625rem;
    line-height: 1.2;
    white-space: pre-wrap;
    margin-top: 0.325rem;
  }
  /* @media ${devices.tabletM} {
    p {
      font-size: 0.9rem;
    }
  } */
`;

export const PostBodyImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.125rem 0 0.125rem 0;
  position: relative;

  @media ${devices.mobileL} {
    flex-direction: column;
    margin: 0 0.25rem 0 0.25rem;
  }

  @media ${devices.tabletS} {
    flex-direction: row;
    margin: 0.125rem 0 0.125rem 0;
  }
`;

export const PostBodyInfoBlock = styled.div`
  margin: 0.25rem;
  display: flex;
  max-width: 350px;
  flex-direction: column;
  @media ${devices.mobileL} {
  }
`;

export const PostBodyImg = styled.img`
  margin: 0 0.25rem;
  border-radius: 0.325rem;
  height: 100px;
  width: 100px;
  object-fit: cover;
  box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightDark};

  ${(props) =>
    props.artist &&
    css`
      @media ${devices.tabletS} {
        width: 200px;
        height: 200px;
      }
    `}

  ${(props) =>
    props.album &&
    css`
      @media ${devices.tabletS} {
        height: 75px;
        width: 75px;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    `}

	@media ${devices.mobileL} {
    margin: 0.25rem 0;
  }

  @media ${devices.tabletS} {
    margin: 0 0.25rem;
  }
`;

export const PostBodyInfoMiniDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor};
  padding: 0.5rem 0;
`;

export const PostBodyInfoLabelP = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
  width: fit-content;
  padding: 0 0 2px 0;
  border-bottom: 1px solid ${(props) => props.theme.hero};
`;

export const PostBodyInfoP = styled.p`
  font-size: 1rem;
  margin-left: 0.75rem;
`;

export const SinglePostDiv = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.subdued};
  box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightDark};
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;

  @media ${devices.tabletS} {
    border-radius: 0.325rem;
  }

  @media ${devices.tabletM} {
    padding: 0.5rem 0.75rem;
  }
`;

export const UsernameP = styled.p`
  margin-top: 0.125rem;
  font-size: 0.75rem;
`;

export const CommentFormDiv = styled(SinglePostDiv)`
  display: block;
`;

export const CommentP = styled.p`
  margin: 0.75rem 0 0.5rem 0;
  word-break: break-word;
  white-space: normal;
  line-height: 1.1;
  font-size: 1rem;
`;

export const EditDeleteButtonDiv = styled.div`
  align-self: center;
  display: flex;
  flex-wrap: nowrap;
  button {
    margin: 0 0.125rem;
  }

  ${(props) =>
    props.body &&
    css`
      margin-right: 0.75rem;
    `}
`;

export const CommentBodyDiv = styled.div`
  width: 100%;
`;

export const CommentBottomBarDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;
