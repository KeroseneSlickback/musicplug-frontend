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
  padding: 1rem;

  ${(props) =>
    props.active &&
    css`
      height: 35px;
    `}
`;

const DelayMessageModule = ({ load }) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Loading might take longer due to slow backend response.");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (load) {
    return <FadingDiv active={message !== ""}>{message}</FadingDiv>;
  }
};

export default DelayMessageModule;
