import React, { useState } from "react";
import styled, { css } from "styled-components";

const FadingDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  opacity: 0.5;
  display: flex;
  height: 0px;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;

  ${(props) =>
    props.active &&
    css`
      height: 35px;
    `}
`;

const DelayMessageModule = () => {
  const [message, setMessage] = useState("");
  setTimeout(() => {
    setMessage("Loading make take longer due to slow backend response.");
  }, 3000);
  return <FadingDiv active={message !== ""}>{message}</FadingDiv>;
};

export default DelayMessageModule;
