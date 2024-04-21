import { useState } from "react";

const CartPage = () => {
  const course1 = {
    id: 1,
    img: "https://www.freecodecamp.org/news/content/images/2024/03/csharp2.png",
    name: "Вовед во C#",
    lecturer: {
      id: 1,
      fullName: "Adam Smith",
    },
    price: 1600,
  };
  const course2 = {
    id: 2,
    img: "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png",
    name: "Вовед во React",
    lecturer: {
      id: 1,
      fullName: "Adam Smith",
    },
    price: 1600,
  };

  const [cartItems, setCartItems] = useState([course1, course2]);

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Кошничка</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.map((course) => (
            <div
              key={course.id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={course.img}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {course.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">
                    <b>Предавач:</b> {course.lecturer.fullName}
                  </p>
                  <p className="mt-1 text-xs text-gray-700">
                    <b>Цена:</b> {course.price} ден
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center space-x-4">
                    <svg
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

          <button className=" w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Плати
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
