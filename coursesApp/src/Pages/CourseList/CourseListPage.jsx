import { useParams } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

const CourseListPage = () => {
  const params = useParams();
  const { category } = params;
  const [foundCategory, setFoundCategory] = useState();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/categories/${category}`);
        setFoundCategory(data);
      } catch (error) {
        console.log("Error fetching categories");
      }
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/courses/category/${foundCategory.id}`
        );
        setCourses(data);
      } catch (error) {
        console.log("Error fetching categories");
      }
    };
    fetchData();
  }, [foundCategory]);

  return (
    <>
      <Header page={"Courses"} />
      <div>
        <h2 className="text-center mt-5 text-3xl">
          {foundCategory && foundCategory.name}
        </h2>
        <div className="flex justify-around mt-5 w-11/12 m-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-5">
            {courses &&
              courses.map((c) => (
                <CourseCard key={c.id} course={c} status={true} />
              ))}
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <Pagination count={10} color="primary" className="mt-10 mb-10" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseListPage;
