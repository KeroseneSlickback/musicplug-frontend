import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../Utilities/AuthContext";

import {
  FormContainer,
  FormBlock,
  FormInput,
  Form,
  FormLabel,
  FormH1,
} from "../../Components/Forms";
import { ModalContainer } from "../../Components/Containers";
import {
  MediumStyledButton,
  CloseButton,
  CloseButtonDiv,
} from "../../Components/Buttons";
import ConfirmMessageModule from "../MessageComponents/ConfirmMessageModule";
import WarningMessageModule from "../MessageComponents/WarningMessageModule";

function LoginModal(props) {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const [confirm, setConfirm] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const closeHandler = () => {
    props.closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8888/users/login", loginData)
      .then((response) => {
        setConfirm(true);
        setLoginError(false);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("jwt", response.data.token.split(" ")[1]);
        authContext.login();
        setTimeout(() => {
          props.closeModal();
          history.go(0);
        }, 1000);
      })
      .catch((error) => {
        setLoginError(true);
      });
  };

  return (
    <ModalContainer>
      <FormContainer>
        <FormH1>Welcome Back!</FormH1>
        <h3>Login below</h3>
        <Form onSubmit={loginHandler}>
          <FormBlock>
            <FormInput
              required
              name="username"
              type="text"
              placeholder="Username"
              value={loginData.username}
              onChange={handleChange}
            />
            <FormLabel htmlFor="username">Your Username</FormLabel>
          </FormBlock>
          <FormBlock>
            <FormInput
              required
              name="password"
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
            />
            <FormLabel htmlFor="password">Your Password</FormLabel>
          </FormBlock>
          {confirm ? (
            <ConfirmMessageModule string="You've successfully logged in." />
          ) : null}
          {loginError ? (
            <WarningMessageModule string="Please try logging in again." />
          ) : null}
          <MediumStyledButton bottom>Login</MediumStyledButton>
        </Form>
      </FormContainer>
      <CloseButtonDiv>
        <CloseButton onClick={closeHandler} />
      </CloseButtonDiv>
    </ModalContainer>
  );
}

export default LoginModal;
