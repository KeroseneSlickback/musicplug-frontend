import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  CloseButton,
  CloseButtonDiv,
  MediumStyledButton,
  SmallButton,
} from "../../Components/Buttons";
import { ModalContainer } from "../../Components/Containers";
import { DeleteUserDiv } from "../../Components/FooterComponents";
import {
  Form,
  FormBlock,
  FormContainer,
  FormH1,
  FormImgInput,
  FormInput,
  FormLabel,
  PostAccessoryP,
} from "../../Components/Forms";
import DeleteModal from "./DeleteModal";
import AuthContext from "../../Utilities/AuthContext";
import ConfirmMessageModule from "../MessageComponents/ConfirmMessageModule";
import WarningMessageModule from "../MessageComponents/WarningMessageModule";

function UserModal(props) {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [message, setMessage] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [deleteUserError, setDeleteUserError] = useState(false);
  const [confirmUsername, setConfirmUsername] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [deleteUserConfirm, setDeleteUserConfirm] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [confirmAvatar, setConfirmAvatar] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const handleImageUpload = (e) => {
    setAvatar(e.target.files[0]);
  };

  const checkAvatar = (img) => {
    if (img === "") {
      return false;
    } else {
      return true;
    }
  };

  const updateAvatar = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    if (checkAvatar(avatar)) {
      const imageFormData = new FormData();
      imageFormData.append("picture", avatar);
      axios
        .patch(
          "https://musicplug-backend.onrender.com/users/me/avatar",
          imageFormData,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        )
        .then(() => {
          setAvatarError(false);
          setConfirmAvatar(true);
        })
        .catch((err) => {
          setAvatarError(false);
        });
    }
  };

  const updateUsername = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    axios
      .patch(
        `https://musicplug-backend.onrender.com/users/me`,
        { username: newUsername },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((res) => {
        setUsernameError(false);
        setConfirmUsername(true);
        setTimeout(() => {
          props.closeModal();
        }, 1000);
      })
      .catch((err) => {
        setUsernameError(true);
      });
  };

  const updatePassword = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    axios
      .patch(
        `https://musicplug-backend.onrender.com/users/me`,
        { password: newPassword },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((res) => {
        setPasswordError(false);
        setConfirmPassword(true);
        setTimeout(() => {
          props.closeModal();
        }, 1000);
      })
      .catch((err) => {
        setPasswordError(true);
      });
  };

  const deleteUser = (e) => {
    const jwt = localStorage.getItem("jwt");
    axios
      .delete("https://musicplug-backend.onrender.com/users/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        setDeleteUserError(false);
        setDeleteUserConfirm(true);
        setTimeout(() => {
          toggleDelete();
          localStorage.clear();
          authContext.logout();
          history.go(0);
        }, 1500);
      })
      .catch((err) => {
        setDeleteUserError(true);
      });
  };

  const toggleDelete = (e) => {
    setMessage("your account");
    setShowDeleteConfirm((prev) => !prev);
  };

  return (
    <>
      {showDeleteConfirm ? (
        <DeleteModal
          toggleDelete={toggleDelete}
          confirmDelete={deleteUser}
          message={message}
          deleteUserConfirm={deleteUserConfirm}
          deleteUserError={deleteUserError}
        />
      ) : (
        <ModalContainer sticky>
          <FormContainer>
            <FormH1>User Settings</FormH1>
            <Form onSubmit={updateUsername}>
              <FormBlock>
                <FormInput
                  name="username"
                  type="text"
                  placeholder="Enter New Username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  required
                />
                <FormLabel htmlFor="username">New Username</FormLabel>
                {confirmUsername ? (
                  <ConfirmMessageModule string="Username changed." />
                ) : null}
                {usernameError ? (
                  <WarningMessageModule string="Error. Please refresh and try again." />
                ) : null}
              </FormBlock>
              <MediumStyledButton>Submit</MediumStyledButton>
            </Form>
            <Form onSubmit={updatePassword}>
              <FormBlock>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <FormLabel htmlFor="password">New Password</FormLabel>
                {confirmPassword ? (
                  <ConfirmMessageModule string="Password updated." />
                ) : null}
                {passwordError ? (
                  <WarningMessageModule string="Error. Please refresh and try again." />
                ) : null}
              </FormBlock>
              <MediumStyledButton>Submit</MediumStyledButton>
            </Form>
            <Form onSubmit={updateAvatar}>
              <FormBlock>
                <FormLabel>Update Avatar</FormLabel>
                <PostAccessoryP>
                  Please upload a jpg, jpeg, or png image under 200kb only.
                  Photos with a 1/1 aspect ratio around 50px/50px work best.
                </PostAccessoryP>
                <FormImgInput
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleImageUpload}
                  update
                />
                {confirmAvatar ? (
                  <ConfirmMessageModule string="Avatar updated." />
                ) : null}
                {avatarError ? (
                  <WarningMessageModule string="Error. Please refresh and try again." />
                ) : null}
              </FormBlock>
              <MediumStyledButton>Submit</MediumStyledButton>
            </Form>
            <DeleteUserDiv>
              <p>Delete Account, all posts and comments</p>
              <SmallButton delete onClick={toggleDelete}>
                Delete
              </SmallButton>
            </DeleteUserDiv>
            <div></div>
          </FormContainer>
          <CloseButtonDiv>
            <CloseButton onClick={props.closeModal} />
          </CloseButtonDiv>
          {/* {showDeleteConfirm ? (
      ) : null} */}
        </ModalContainer>
      )}
    </>
  );
}

export default UserModal;
