import React, { useEffect, useState } from "react";
import Course from "../../Components/Course/Course";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const CourseDetails = () => {
  const params = useParams();
  const { courseId } = params;
  const [course, setCourse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/courses/${courseId}`);
        setCourse(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching course");
      }
    };
    fetchData();
  }, [courseId]);

  return (
    <>
      <Header page={"Courses"} />
      {isLoading ? (
        <CircularProgress size="1rem" color="inherit" />
      ) : (
        <Course course={course} />
      )}

      <Footer />
    </>
  );
};

export default CourseDetails;
