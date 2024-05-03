import React, { useContext, useEffect, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import courseImage from "../../assets/course.png";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CommentWrapper from "../CommentWrapper/CommentWrapper";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import { CircularProgress } from "@mui/material";

const Course = ({ course }) => {
  const files = [
    "CelestialSymphony.pdf",
    "SereneShadows.pdf",
    "EnigmaEncounter.pdf",
    "RadiantReflections.pdf",
    "WhisperingWonders.pdf",
  ];

  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo, cart } = state;
  const [isLoading, setIsLoading] = useState(false);
  const [payIsLoading, setPayIsLoading] = useState(false);
  const [commentsIsLoading, setCommentsIsLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/comments/${course.id}`);
        setComments(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching comments");
      }
    };
    if (course) {
      fetchData();
    }
  }, [course]);

  const addToCartHandler = async (e, isPaying) => {
    if (isPaying == true) {
      setPayIsLoading(true);
    }
    e.stopPropagation();
    setIsLoading(true);
    if (userInfo && userInfo.role == "student") {
      const { data } = await axios.get(
        `/api/user/owns?userId=${userInfo.id}&courseId=${course.id}`
      );
      if (data == false) {
        ctxDispatch({
          type: "CART_ADD_ITEM",
          payload: { ...course, quantity: 1 },
        });
        if (isPaying) {
          setPayIsLoading(false);
          navigate("/payment");
        } else {
          toast.success("Курсот е додаден во кошничката");
        }
      } else {
        toast.info("Веќе го поседувате курсот");
      }
      setIsLoading(false);
    } else if (userInfo && userInfo.role == "lecturer") {
      toast.info("Предавачите неможат да купуваат курсеви");
      setIsLoading(false);
    } else {
      toast.error("Најавете се");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="course-container w-full">
        <div className="course-header bg-gray-300 p-5 max-h-full flex flex-col">
          <div className="md:flex flex-column md:flex-row mt-4 flex-grow">
            <div className="md:w-8/12 sm:w-full">
              <h2 className="text-2xl font-bold mb-3">{course.name}</h2>
              <p>{course.description}</p>
            </div>
            <div className="course-short-container md:w-1/5 p-3 text-center shadow-2xl bg-white md:ml-20 sm:w-full mt-5 md:mt-0 inline-block max-w-xs">
              <div className="video-part">
                <img src={course.imageUrl} alt="course-image" />
              </div>
              <div className="buy-part mb-5">
                <p className="text-lg font-bold mb-3">{course.price} ден.</p>
                <div className="flex flex-col">
                  <button
                    onClick={(e) => addToCartHandler(e, false)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3"
                  >
                    {isLoading ? (
                      <CircularProgress size="1rem" color="inherit" />
                    ) : (
                      "Додај во кошничка"
                    )}
                  </button>
                  <button
                    onClick={(e) => addToCartHandler(e, true)}
                    className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded-full"
                  >
                    {payIsLoading ? (
                      <CircularProgress size="1rem" color="inherit" />
                    ) : (
                      "Купи"
                    )}
                  </button>
                </div>
              </div>
              <div className="details-part text-left">
                <h3 className="text-xl font-bold pb-2">Овој курс содржи: </h3>
                <div>
                  <p>
                    <SmartDisplayIcon /> 12 часови видеа
                  </p>
                  <p>
                    <InsertDriveFileIcon /> 30 pdf лекции
                  </p>
                  <p>
                    <EmojiEventsIcon /> Сертификат за завршен курс
                  </p>
                  <p>
                    <FileDownloadIcon /> 1 фајл за симнување
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="course-content p-5 sm:order-1">
          <h2 className="text-2xl font-bold mb-3">
            Содржина на курсот: <LockOutlinedIcon />
          </h2>
          <div className="course-files flex flex-col justify-center blur-xs">
            {files.map((file, index) => (
              <p key={index}>
                <InsertDriveFileIcon /> {index + 1}. {file.toString()}
              </p>
            ))}
          </div>
        </div>
        <div className="course-content p-5 sm:order-1">
          <CommentWrapper comments={comments} />
        </div>
      </div>
    </>
  );
};

export default Course;
