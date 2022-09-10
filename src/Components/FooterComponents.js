import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: ${(props) => props.theme.fontColor};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.subdued};
  width: 100%;
  box-shadow: 0px 0px 3px 0px ${(props) => props.theme.highlightDark};
  margin-top: auto;
  padding: 0.25rem 1rem;
`;

export const FooterUserDiv = styled.div`
  margin: 4px;
`;

export const FooterMessageDiv = styled.div`
  max-width: 200px;
  p {
    font-size: 0.725rem;
  }
`;

export const DeleteUserDiv = styled.div`
  margin-top: 1.25rem;
  p {
    margin-bottom: 0.5rem;
  }
`;
