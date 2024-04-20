import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([
    "Вештачка интелигенција",
    "Сајбер безбедност",
    "Алгоритми и податочни структури",
  ]);
  return (
    <div className="flex flex-col items-center mt-5">
      {categories.map((category) => (
        <div
          onClick={() => navigate(`/courses/${category}`)}
          key={category}
          className="bg-gray-400 mt-5 h-36 w-11/12 md:w-4/5 lg:w-2/3 flex items-center justify-center rounded cursor-pointer"
        >
          <h1 className="lg:text-2xl md:text-xl text-lg text-center">
            Курсеви за{" "}
            <span className="text-blue-900 text-pretty font-bold">
              {category}
            </span>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;