import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
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
  const user = {
    name: "Adam Smith",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.",
    imageUrl:
      "https://img.freepik.com/free-photo/closeup-portrait-caucasian-happy-teacher-glasses_74855-9736.jpg",
  };
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);

  const editProfile = () => {
    setIsEdit(false);
  };

  return (
    <>
      <Header />
      <section className="bg-gray-100" style={{ minHeight: "300px" }}>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col items-center justify-evenly h-full md:flex-row">
            <div className="mt-12 md:mt-0 flex flex-col items-center">
              {isEdit ? (
                <input
                  style={{
                    height: "160px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              ) : (
                <img
                  src={user.imageUrl}
                  alt="About Us Image"
                  className="object-cover rounded-lg shadow-md max-h-full"
                  style={{
                    height: "160px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                />
              )}

              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-lg">
                {user.name}
              </h2>
            </div>
            <div
              className="mt-12 md:mt-0 flex flex-col items-center"
              style={{ width: "50%" }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-lg">
                Опис
              </h2>
              {isEdit ? (
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
                  value={user.description}
                ></textarea>
              ) : (
                <p>{user.description}</p>
              )}

              {isEdit ? (
                <button
                  onClick={() => editProfile()}
                  className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                >
                  Потврди
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  Измени
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="bg-gray-100 flex flex-col items-center  pt-4 pb-5">
        <h2 className="text-3xl font-bold  text-gray-900 sm:text-lg">
          Мои курсеви
        </h2>
        <button
          onClick={() => setIsCreate(!isCreate)}
          className=" bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Креирај курс
        </button>
        {isCreate ? (
          <form className="mt-10 w-3/5">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Име на курс
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Слика
              </label>
              <input
                type="text"
                name="imageUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Цена
              </label>
              <input
                type="number"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Опис
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={""}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            >
              Потврди
            </button>
          </form>
        ) : null}

        <div className="flex justify-around mt-5 w-11/12 m-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-5">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} status={false} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfilePage;
