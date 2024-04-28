import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Store } from "../../Store";
import { useContext } from "react";
import { toast } from "react-toastify";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (e) => {
    e.stopPropagation();
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...course, quantity: 1 },
    });
    toast.success("Курсот е додаден во кошничката");
  };

  return (
    <div
      onClick={() => navigate(`/course/${course.slug}`)}
      className="bg-white shadow-2xl rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
    >
      <img className="rounded-t-lg p-8" src={course.img} alt="product image" />

      <div className="px-5 pb-5">
        <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
          {course.name}
        </h3>

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
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {course.price} ден
          </span>
          <button
            onClick={(e) => addToCartHandler(e)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Додади во кошничка
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
