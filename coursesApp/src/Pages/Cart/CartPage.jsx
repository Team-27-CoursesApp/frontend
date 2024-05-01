import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const CartPage = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <>
      <Header page={"Courses"} />
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">
          {" "}
          {cartItems.reduce((a, c) => a + c.price, 0) == 0
            ? "Кошничката е празна"
            : "Кошничка"}
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((course) => (
              <div
                key={course.id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={course.imageUrl}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {course.name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      <b>Предавач:</b> {course.lecturer}
                    </p>
                    <p className="mt-1 text-xs text-gray-700">
                      <b>Цена:</b> {course.price} ден
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center space-x-4">
                      <svg
                        onClick={() => removeItemHandler(course)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cartItems.reduce((a, c) => a + c.price, 0) != 0 && (
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="flex justify-between">
                <p className="text-lg font-bold">Вкупно</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    {cartItems.reduce((a, c) => a + c.price, 0)} ден
                  </p>
                </div>
              </div>
              <hr className="my-4" />

              <button
                onClick={() => navigate("/payment")}
                className=" w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              >
                Плати
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
