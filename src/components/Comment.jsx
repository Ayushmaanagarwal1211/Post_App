import React, { useState } from "react";
import { FaPenSquare, FaTrashAlt } from "react-icons/fa";

export default function Comment({ comment, handleEdit, handleDelete }) {
  const time = new Date(comment.time_stamp);
  const date = new Date(comment.time_stamp);
  const [comment_text, setCommentText] = useState(comment.comment_text);
  const [isEdit, setIsEdit] = useState(false);

  function handleSubmit() {
    handleEdit(comment.comment_id, comment_text);
    setIsEdit(false);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        {!isEdit ? (
          <p className="text-gray-800 text-sm">{comment_text}</p>
        ) : (
          <input
            value={comment_text}
            onChange={(e) => setCommentText(e.target.value)}
            autoFocus
            className="border border-gray-300 rounded-md p-2 w-full text-sm text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        )}

        <div className="flex items-center gap-3">
          {!isEdit ? (
            <button
              onClick={() => setIsEdit(true)}
              className="text-blue-600 hover:text-blue-800 transition"
              title="Edit Comment"
            >
              <FaPenSquare className="text-lg" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Submit
            </button>
          )}
          <button
            onClick={() => handleDelete(comment.comment_id)}
            className="text-red-600 hover:text-red-800 transition"
            title="Delete Comment"
          >
            <FaTrashAlt className="text-lg" />
          </button>
        </div>
      </div>

      <div className="text-xs text-gray-500">
        {time.getHours()}:{time.getMinutes()} - {date.getDate()}/
        {date.getMonth() + 1}/{date.getFullYear()}
      </div>
    </div>
  );
}
