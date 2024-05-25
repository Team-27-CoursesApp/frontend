import React from "react";
import Comment from "../Comment/Comment";

const CommentWrapper = ({ comments }) => {
  return (
    <div className="comments-wrapper">
      <h2 className="text-2xl bold mb-2">Коментари</h2>
      <div className="bg-slate-300 p-3">
        {comments &&
          comments.map((c) => (
            <>
              <Comment key={c.id} comment={c} />
              <hr />
            </>
          ))}
        {comments.length == 0 && "Нема коментари за овој курс"}
      </div>
    </div>
  );
};

export default CommentWrapper;
