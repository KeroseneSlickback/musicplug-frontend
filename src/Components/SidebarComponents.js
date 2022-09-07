import styled from "styled-components";
import { devices } from "../Styles/Variables";

export const NewPostDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  margin: 0.625rem 0.625rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColorAlt};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.primary};
    box-shadow: 0px 0px 3px 1px ${(props) => props.theme.highlightDark};
    font-size: 0.875rem;
    height: 50px;
    width: 50px;
    border-radius: 50%;

    p {
      display: none;
    }

    svg {
      height: 40px;
    }

    &:hover {
      background-color: ${(props) => props.theme.primaryAlt};
      box-shadow: 0px 0px 3px 1px ${(props) => props.theme.highlightMuted};
    }
  }

  @media ${devices.tabletS} {
    position: static;
    margin: 0;

    a {
      border-radius: 0.325rem;
      font-size: 1rem;
      height: 50px;
      width: 100px;
      margin: 0px 0 0.25rem 0;

      p {
        display: inline;
      }

      svg {
        height: 22px;
        padding-right: 2px;
      }
    }
  }
  /* 
	@media ${devices.tabletM} {
		a {
			font-size: 1rem;
			height: 40px;
			width: 100px;
			margin: 0px 0 0.25rem 0;
		}
	} */

  @media ${devices.tabletL} {
    a {
      font-size: 1.2rem;
      height: 60px;
      width: 120px;
    }
  }
`;
