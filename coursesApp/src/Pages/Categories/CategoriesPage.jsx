import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data);
      } catch (error) {
        console.log("Error fetching categories");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header page={"Courses"} />
      <div className="flex flex-col items-center my-5">
        {categories.map((category) => (
          <div
            onClick={() => navigate(`/courses/${category.slug}`)}
            key={category.id}
            className="bg-gray-400 mt-5 h-36 w-11/12 md:w-4/5 lg:w-2/3 flex items-center justify-center rounded cursor-pointer"
          >
            <h1 className="lg:text-2xl md:text-xl text-lg text-center">
              Курсеви за{" "}
              <span className="text-blue-900 text-pretty font-bold">
                {category.name}
              </span>
            </h1>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CategoriesPage;
