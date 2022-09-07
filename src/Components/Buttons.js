import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../Styles/Variables";

export const SmallButton = styled.button`
  color: ${(props) => props.theme.fontColorAlt};
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.subdued};
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.subduedAlt};
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.alternative};
      &:hover {
        background-color: ${(props) => props.theme.alternativeAlt};
      }
    `}
  ${(props) =>
    props.delete &&
    css`
      background-color: ${(props) => props.theme.alternative};
      &:hover {
        background-color: ${(props) => props.theme.alternativeAlt};
      }
    `}
	${(props) =>
    props.link &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      p {
        margin-left: 0.375rem;
      }
    `}
`;

export const SmallStyledButton = styled(SmallButton)`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  &:hover {
    background-color: ${(props) => props.theme.secondaryAlt};
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.primary};
      &:hover {
        background-color: ${(props) => props.theme.primaryAlt};
      }
    `}

  ${(props) =>
    props.smaller &&
    css`
      margin-top: 0.5rem;
      font-size: 0.875rem;
      padding: 0.325rem 0.5rem;
      svg {
        height: 1.125rem;
        width: 1.125rem;
        opacity: 1;
        animation: fade-in 0.5s;
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      }
    `}
    ${(props) =>
    props.footer &&
    css`
      margin: 0;
    `}
`;

export const SmallEmptyButton = styled(SmallButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 0.75rem;
  background-color: inherit;
  font-size: 0.75rem;

  color: ${(props) => props.theme.fontColor};

  svg {
    margin-left: 0.125rem;
    height: 1.25rem;
  }

  ${(props) =>
    props.post &&
    css`
      padding: 0;
      font-size: 1rem;
      svg {
        height: 1.625rem;
      }
    `}

  ${(props) =>
    props.body &&
    css`
      &:hover {
        background-color: inherit;
      }
    `}

		@media ${devices.tabletS} {
    svg {
      height: 1.5rem;
    }
  }

  @media ${devices.tabletM} {
    font-size: 0.8rem;
    svg {
      height: 1.625rem;
    }
  }
`;

export const MediumStyledButton = styled(SmallStyledButton)`
  margin: 0.25rem;
  padding: 0.325rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 0.325rem;
  font-family: inherit;

  ${(props) =>
    props.bottom &&
    css`
      margin-top: 1.125rem;
      font-size: 0.9rem;
    `}
  @media ${devices.tabletM} {
    padding: 0.5rem 0.875rem;
    font-size: 1rem;
    ${(props) =>
      props.bottom &&
      css`
        margin-top: 1.125rem;
        font-size: 1rem;
      `}
  }
`;

export const CloseButtonDiv = styled.div`
  position: absolute;
  top: 1.125rem;
  right: 1.125rem;
`;

export const CloseButton = styled.button`
  background-color: ${(props) => props.theme.subdued};
  height: 1.125rem;
  width: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.dark &&
    css`
      background-color: inherit;
    `}

  &:hover:after,
	&:hover:before {
    background-color: ${(props) => props.theme.fontColor};
  }

  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 1.125rem;
    width: 0.125rem;
    background-color: ${(props) => props.theme.fontColor};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  @media ${devices.tabletS} {
    height: 1.625rem;
    width: 1.625rem;

    &:before,
    &:after {
      position: absolute;
      content: " ";
      height: 1.625rem;
      width: 0.125rem;
      background-color: ${(props) => props.theme.fontColor};
    }
  }
  @media ${devices.tabletM} {
    height: 1.8725rem;
    width: 1.8725rem;

    &:before,
    &:after {
      position: absolute;
      content: " ";
      height: 1.8725rem;
      width: 0.125rem;
      background-color: ${(props) => props.theme.fontColor};
    }
  }
`;

export const SortDiv = styled.div`
  padding: 0 1.125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${devices.tabletS} {
    padding: 0;
  }
`;

export const SortButton = styled.button`
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  text-decoration: none;
  border-radius: 0.325rem;
  margin: 1px;
  width: 50%;
  text-align: center;
  background-color: ${(props) => props.theme.subdued};
  box-shadow: 0 0 3px ${(props) => props.theme.highlightDark};
  border: none;
  cursor: pointer;
  height: 1.25rem;

  &:hover {
    background-color: ${(props) => props.theme.subduedAlt};
  }

  &.selected {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.fontColorAlt};

    &:hover {
      background-color: ${(props) => props.theme.secondaryAlt};
    }
  }

  @media ${devices.tabletS} {
    font-size: 0.85rem;
    height: 1.25rem;
  }
  @media ${devices.tabletL} {
    font-size: 0.9rem;
    height: 1.5rem;
  }
`;

export const PageButton = styled(MediumStyledButton)`
  padding: 0.325rem 0.75rem;
  margin-left: 0.25rem;

  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.primary};
      &:hover {
        background-color: ${(props) => props.theme.primaryAlt};
      }
    `}
`;

export const SpotifyButton = styled.a``;

export const SmallStyledLinkButton = styled.a`
  color: ${(props) => props.theme.fontColor};
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.subdued};
  height: 100%;
  padding: 0px 0.75rem;
  font-size: 0.7rem;
  border-radius: 0.325rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.subduedAlt};
  }
  @media ${devices.tabletM} {
    font-size: 0.8rem;
  }
`;

export const SmallStyledReactDomLink = styled(Link)`
  color: ${(props) => props.theme.fontColor};
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.subdued};
  height: 100%;
  padding: 0px 0.75rem;
  font-size: 0.7rem;
  border-radius: 0.325rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  &:hover {
    background-color: ${(props) => props.theme.subduedAlt};
  }

  @media ${devices.tabletM} {
    font-size: 0.8rem;
  }
`;

export const MediumStyledReactDomLinkPrimary = styled(Link)`
  margin: 0.25rem;
  color: ${(props) => props.theme.fontColorAlt};
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  padding: 0.5rem 0.875rem;
  font-size: 0.8rem;
  border-radius: 0.325rem;
  img {
    margin-right: 0.25rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.primaryAlt};
  }

  @media ${devices.tabletM} {
    padding: 8px 0.875rem;
    font-size: 1rem;
  }
`;

export const WideStyledLinkButton = styled.a`
  color: ${(props) => props.theme.fontColorAlt};
  border: none;
  cursor: pointer;
  padding: 0.325rem 0.875rem;
  border-radius: 0.325rem;
  text-decoration: none;
  width: 100%;
  max-width: 250px;
  background-color: ${(props) => props.theme.hero};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.liteHero};
  }
  align-self: center;
`;

export const TinyButton = styled.button`
  color: ${(props) => props.theme.fontColorAlt};
  font-size: 0.7rem;
  padding: 0.25rem 0.325rem;
  border-radius: 0.325rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.secondary};
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.secondaryAlt};
  }

  ${(props) =>
    props.alternative &&
    css`
      background-color: ${(props) => props.theme.alternative};
      &:hover {
        background-color: ${(props) => props.theme.alternativeAlt};
      }
    `}
`;

export const GenreLinkButton = styled(Link)`
  color: ${(props) => props.theme.fontColor};
  border: none;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 0px 2px ${(props) => props.theme.highlightDark};
  text-decoration: none;
  font-size: 0.75rem;
  background-color: ${(props) => props.theme.subdued};
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.325rem;
  &:hover {
    background-color: ${(props) => props.theme.subduedAlt};
  }

  @media ${devices.mobileL} {
    height: 1.8725rem;
    font-size: 0.88rem;
  }

  @media ${devices.tabletS} {
    font-size: 1rem;
    height: 40px;
    width: 100px;
    margin: 0.25rem 00.25rem 0;
  }

  @media ${devices.tabletM} {
    font-size: 1rem;
    height: 40px;
    width: 100px;
    margin: 0.25rem 00.25rem 0;
  }

  @media ${devices.tabletL} {
    font-size: 1.3rem;
    height: 46px;
    width: 120px;
    margin: 0.25rem 00.25rem 0;
  }
`;

export const InactiveUserButton = styled.button`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
  font-size: 0.875rem;
  color: ${(props) => props.theme.fontColor};
  background-color: inherit;
  text-decoration: none;
  border: none;
  cursor: auto;
  img {
    height: 30px;
    border-radius: 0.325rem;
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme.highlightMuted};
  }

  ${(props) =>
    props.post &&
    css`
      font-size: 1rem;
      padding: 0;
      justify-self: start;
      img {
        height: 30px;
      }
      p {
        margin-left: 0.5rem;
      }
    `}

  ${(props) =>
    props.comment &&
    css`
      padding: 0;
      margin: 0;
      align-items: center;
      flex-direction: row;
      img,
      svg {
        height: 24px;
        width: 24px;
        margin-right: 0.5rem;
      }
    `}
`;
