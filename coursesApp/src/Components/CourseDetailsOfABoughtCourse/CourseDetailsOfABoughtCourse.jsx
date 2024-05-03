import React, { useContext, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FolderIcon from "@mui/icons-material/Folder";
import courseImage from "../../assets/course.png";
import axios from "axios";
import { Store } from "../../Store";
import { toast } from "react-toastify";

const CourseDetailsOfABoughtCourse = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const { state } = useContext(Store);
  const { userInfo } = state;

  const addCommentHandler = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/comments", {
        username: userInfo.username,
        profileImg: userInfo.imageUrl,
        text: text,
        userId: userInfo.id,
        courseId: course.id,
      });
      toast.success("Коментарот е испратен");
      setText("");
      setIsLoading(false);
    } catch (error) {
      toast.error("Грешка при коментирање");
    }
  };

  const modules = [
    {
      name: "Модул 1: Вовед во Сајбер Безбедност",
      lectures: [
        "Разбирање на Сајбер Претпоставките",
        "Преглед на мерките за Сајбер Безбедност",
        "Историја и Еволуција на Сајбер Безбедността",
      ],
      assignments: [
        "Задача 1: Анализа на Сајбер Претпоставките",
        "Задача 2: Проценка на Сигурносните Услови",
      ],
    },
    {
      name: "Модул 2: Мрежна Безбедност",
      lectures: [
        "Вовед во Мрежната Безбедност",
        "Заштитни Огради и Системи за Откривање на Навлези",
        "Безбедни Мрежни Протоколи",
      ],
      assignments: [
        "Задача 3: Имплементација на Мрежна Безбедност",
        "Задача 4: Анализа на Мрежниот Сообраќај",
      ],
    },
  ];

  return (
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
            <div className="details-part text-left">
              <h3 className="text-xl font-bold pb-2">Овој курс содржи: </h3>
              <div>
                <p>
                  <LockOutlinedIcon /> 12 часови видеа
                </p>
                <p>
                  <InsertDriveFileIcon /> 30 pdf лекции
                </p>
                <p>
                  <AssignmentIcon /> Сертификат за завршен курс
                </p>
                <p>
                  <FolderIcon /> 1 фајл за симнување
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="course-content p-5 sm:order-1">
        <h2 className="text-2xl font-bold mb-3">Содржина на курсот:</h2>
        {/* 
        <div className="accordion">
          {modules.map((module, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`module-${index}-content`}
                id={`module-${index}-header`}
              >
                <Typography>{module.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <h3>Лекции:</h3>
                  <ul>
                    {module.lectures.map((lecture, i) => (
                      <li key={i}>{lecture}</li>
                    ))}
                  </ul>
                  <h3>Задачи:</h3>
                  <ul>
                    {module.assignments.map((assignment, i) => (
                      <li key={i}>{assignment}</li>
                    ))}
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
          */}

        {course && (
          <iframe
            className="w-full rounded-lg h-svh"
            src={course.videoUrl.replace("watch?v=", "embed/")}
            allow="autoplay; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}

        <div className="flex justify-center items-center mt-10">
          <div className="h-80 px-7 w-[700px] rounded-[12px] bg-white p-4 shadow-md border">
            <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
              Коментирај
            </p>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"
              placeholder="Коментар..."
            ></textarea>

            <div className="flex justify-between mt-2">
              <button
                onClick={addCommentHandler}
                className="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600"
              >
                {isLoading ? (
                  <CircularProgress size="1rem" color="inherit" />
                ) : (
                  "Испрати"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsOfABoughtCourse;
