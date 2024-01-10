import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
// TODO (step6): import SingleStory
import SingleStory from "./SingleStory";
// TODO (step7): import SingleComment
import SingleComment from "./SingleComment";
// TODO (step8): import NewComment
// TODO (step9): import CommentsBlock

import "./Card.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const Card = (props) => {
  // TODO (step6): define state to hold comments (refer to Feed)
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // TODO (step6): implement a GET call to retrieve comments,
    // and assign it to state
    get("/api/comment", { parent: props._id }).then((commentItems) => {
      setComments(commentItems);
    });
  }, []);

  let commentsList = null;
  const hasComments = comments.length !== 0;
  if (hasComments) {
    commentsList = comments.map((commentObj) => (
      <SingleComment
      _id={commentObj._id}
      creator_name={commentObj.creator_name}
      content={commentObj.content}
    />
    ));
  } else {
   commentsList = <div>No comments!</div>;
  }

  // TODO (step6): render a SingleStory using props,
  // and render the comments from state (with JSON.stringify)
  return (
    <div className="Card-container">
        <SingleStory
          _id={props._id}
          creator_name={props.creator_name}
          content={props.content}
        />
        {commentsList}
      </div>
  )
  // TODO (step7): map comments from state into SingleComment
  // components (refer to Feed)
  // TODO (step8): add in the NewComment component (refer to Feed)
  // TODO (step9): use CommentsBlock
};

export default Card;
