import React from "react";
import Background from "../../assets/background.png";

const Comment = ({ comment }) => {
  return (
    <div className="comment flex mb-3">
      <div className="image">
        <img src={comment.profileImg} alt="" className="w-12 rounded-lg" />
      </div>
      <div className="comment-details ml-3">
        <p>
          <span>
            <a href="#" className="text-blue-800">
              {comment.username}
            </a>
          </span>{" "}
          {comment.text}
        </p>
      </div>
    </div>
  );
};

export default Comment;
