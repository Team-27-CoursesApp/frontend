import React, { useEffect, useState } from "react";
import CourseDetailsOfABoughtCourse from "../../Components/CourseDetailsOfABoughtCourse/CourseDetailsOfABoughtCourse";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const CourseDetailsOfABoughtCoursePage = () => {
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
        <CourseDetailsOfABoughtCourse course={course} />
      )}
      <Footer />
    </>
  );
};

export default CourseDetailsOfABoughtCoursePage;
