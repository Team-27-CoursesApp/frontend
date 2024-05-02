import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useContext, useState } from "react";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const CourseCard = ({ course, status }) => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo, cart } = state;
  const [isLoading, setIsLoading] = useState(false);

  const navigateToCourse = async (e) => {
    try {
      const { data } = await axios.get(
        `/api/user/owns?userId=${userInfo.id}&courseId=${course.id}`
      );
      if (data == false) {
        navigate(`/course/${course.id}`);
      } else {
        navigate(`/my-courses/${course.id}`);
      }
    } catch (error) {
      console.log("Error accessing course");
    }
  };

  const addToCartHandler = async (e) => {
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
        toast.success("Курсот е додаден во кошничката");
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
    <div
      onClick={navigateToCourse}
      className="bg-white shadow-2xl rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
    >
      <img
        className="rounded-t-lg p-8"
        src={course.imageUrl}
        alt="product image"
      />

      <div className="px-5 pb-5">
        <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
          {course.name}
        </h3>
        <h4 className="text-gray-900 font-semibold text-sm tracking-tight dark:text-white">
          Предавач: {course.lecturer}
        </h4>

        <div className="flex items-center mt-2.5 mb-5">
          {Array.from({ length: 5 }, (_, index) =>
            index < course.rating ? (
              <StarIcon key={index} style={{ color: "yellow" }} />
            ) : (
              <StarOutlineIcon key={index} style={{ color: "yellow" }} />
            )
          )}

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {course.rating}
          </span>
        </div>
        {status && (
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {course.price} ден
            </span>
            <button
              onClick={addToCartHandler}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isLoading ? (
                <CircularProgress size="1rem" color="inherit" />
              ) : (
                "Додади во кошничка"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
