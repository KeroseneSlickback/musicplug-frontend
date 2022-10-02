import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const FadingDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  opacity: 0.5;
  display: flex;
  height: 0px;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  padding: 0rem;

  ${(props) =>
    props.active &&
    css`
      height: 35px;
      padding: 1rem 1rem 2rem 1rem;
    `}
`;

const DelayMessageModule = ({ load }) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(
        "The backend host has a slow initial start, thank you for your patience."
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (load) {
    return <FadingDiv active={message !== ""}>{message}</FadingDiv>;
  }
};

export default DelayMessageModule;
