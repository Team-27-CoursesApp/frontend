import React from "react";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import courseImage from "../../assets/course.png";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Lecturer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/profile/${props.lecturer.username}`)}
        className="bg-gray-100 shadow-2xl rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-2xl cursor-pointer py-3 px-3"
      >
        <div className="px-5 pb-5">
          <h3 className="text-gray-900 font-semibold text-2xl tracking-tight dark:text-white">
            {props.lecturer.name} {props.lecturer.surname}
          </h3>

          <div className="flex items-center mt-2.5 mb-5 dark:text-white">
            {props.lecturer.description}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white mt-5">
              Email: {props.lecturer.email}
            </span>
          </div>

          <div
            onClick={() => navigate(`/profile/${props.lecturer.username}`)}
            className="dark:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            Види повеќе
          </div>
        </div>
      </div>
    </>
  );
};

export default Lecturer;
