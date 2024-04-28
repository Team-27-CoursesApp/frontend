import { useParams } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { useState } from "react";
import { Pagination } from "@mui/material";

const CourseListPage = () => {
  const params = useParams();
  const { category } = params;

  // PlaceHolder for a courses
  const course1 = {
    id: 1,
    img: "https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg",
    slug: "c-sharp-intro",
    name: "Вовед во C#",
    rating: 3.3,
    price: 1600,
  };
  const course2 = {
    id: 2,
    img: "https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg",
    slug: "c-sharp-intro",
    name: "Вовед во C#",
    rating: 4.3,
    price: 1600,
  };
  const course3 = {
    id: 3,
    img: "https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg",
    slug: "c-sharp-intro",
    name: "Вовед во C#",
    rating: 1.3,
    price: 1600,
  };
  const course4 = {
    id: 4,
    img: "https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg",
    slug: "c-sharp-intro",
    name: "Вовед во C#",
    rating: 2.3,
    price: 1600,
  };

  const [courses, setCourses] = useState([course1, course2, course3, course4]);

  return (
    <div>
      <h2 className="text-center mt-5 text-3xl">{category}</h2>
      <div className="flex justify-around mt-5 w-11/12 m-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-5">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} status={true} />
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <Pagination count={10} color="primary" className="mt-10 mb-10" />
      </div>
    </div>
  );
};

export default CourseListPage;
