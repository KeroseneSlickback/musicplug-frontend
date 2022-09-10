import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  InactiveUserButton,
  SmallEmptyButton,
  TinyButton,
} from "../../Components/Buttons";
import {
  PostBodyButtonDiv,
  PostBodyH1,
  PostBodyTextDiv,
  PostBodyContentDiv,
  PostBodyTextInnerDiv,
  EditDeleteButtonDiv,
  PostBodyRightButtonDiv,
} from "../../Components/PostComponents";

import { FullHeart } from "../../Utilities/Images/StyledSVG/FullHeart.js";
import { EmptyHeart } from "../../Utilities/Images/StyledSVG/EmptyHeart.js";
import PostPatchModule from "./PostPatchModule";
import DeleteModal from "./../Modals/DeleteModal";
import { Backdrop } from "../../Components/Backdrop";
import { UserAccountSVG } from "../../Utilities/Images/StyledSVG/UserAccountSVG";

function PostBodyModule(props) {
  const history = useHistory();
  const { title, body, votes, owner, _id, likedUsers } = props.data;
  const [userLiked, setUserLiked] = useState(false);
  const [message, setMessage] = useState("");
  const [postUser, setPostUser] = useState(false);
  const [voteNumber, setVoteNumber] = useState(0);
  const [formattedBody, setFormattedBody] = useState([]);
  const [showDeleteModule, setShowDeleteModule] = useState(false);
  const [showPatch, setShowPatch] = useState(false);
  const [patchData, setPatchData] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if (user._id === owner._id) {
        setPostUser(true);
      } else {
        setPostUser(false);
      }
    }
  }, [owner]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const foundLike = likedUsers.find((liked) => liked._id === user._id);
      if (foundLike) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
    }
    setVoteNumber(votes);
  }, [props.data, likedUsers, votes]);

  useEffect(() => {
    setPatchData({
      title,
      body,
    });
    const newBody = body.split("\n");
    setFormattedBody(newBody);
  }, [title, body]);

  const likePost = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) {
      if (userLiked) {
        setUserLiked(false);
        setVoteNumber((prev) => prev - 1);
        axios
          .patch(
            `https://musicplug-backend.onrender.com/posts/unlike/${_id}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
            }
          )
          .catch((err) => {
            console.log(err);
          });
      } else {
        setUserLiked(true);
        setVoteNumber((prev) => prev + 1);
        axios
          .patch(
            `https://musicplug-backend.onrender.com/posts/like/${_id}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
            }
          )
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const showEdit = () => {
    setShowPatch((prev) => !prev);
  };

  const handlePostPatch = (e) => {
    const { name, value } = e.target;
    setPatchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitPostPatch = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    axios
      .patch(`https://musicplug-backend.onrender.com/posts/${_id}`, patchData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        console.log(res);
        history.go(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleDelete = () => {
    setMessage("this post");
    setShowDeleteModule((prev) => !prev);
  };

  const deletePost = () => {
    const jwt = localStorage.getItem("jwt");
    axios
      .delete(`https://musicplug-backend.onrender.com/posts/${_id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PostBodyTextDiv>
      {showPatch ? (
        <PostPatchModule
          patchData={patchData}
          handlePostPatch={handlePostPatch}
        />
      ) : (
        <PostBodyTextInnerDiv>
          <PostBodyH1>{title}</PostBodyH1>
          <PostBodyContentDiv>
            {formattedBody.map((str, i) => {
              return <p key={i}>{str}</p>;
            })}
          </PostBodyContentDiv>
        </PostBodyTextInnerDiv>
      )}
      <PostBodyButtonDiv>
        <InactiveUserButton post>
          {owner.avatar ? (
            <img
              src={`data:image/png;base64,${owner.avatar.toString("base64")}`}
              alt={owner.username}
            />
          ) : (
            <UserAccountSVG />
          )}
          <p> {owner.username}</p>
        </InactiveUserButton>
        <PostBodyRightButtonDiv>
          {postUser ? (
            showPatch ? (
              <EditDeleteButtonDiv body>
                <TinyButton onClick={submitPostPatch}>Save</TinyButton>
                <TinyButton alternative onClick={() => showEdit()}>
                  Cancel
                </TinyButton>
              </EditDeleteButtonDiv>
            ) : (
              <EditDeleteButtonDiv body>
                <TinyButton onClick={() => showEdit()}>Edit</TinyButton>
                <TinyButton alternative onClick={() => toggleDelete()}>
                  Delete
                </TinyButton>
              </EditDeleteButtonDiv>
            )
          ) : null}
          <SmallEmptyButton post onClick={() => likePost()}>
            <p>{voteNumber}</p>
            {userLiked ? <FullHeart /> : <EmptyHeart />}
          </SmallEmptyButton>
        </PostBodyRightButtonDiv>
      </PostBodyButtonDiv>
      {showDeleteModule ? (
        <DeleteModal
          toggleDelete={toggleDelete}
          confirmDelete={deletePost}
          message={message}
        />
      ) : null}
      {showDeleteModule ? <Backdrop onClick={toggleDelete} /> : null}
    </PostBodyTextDiv>
  );
}

export default PostBodyModule;
