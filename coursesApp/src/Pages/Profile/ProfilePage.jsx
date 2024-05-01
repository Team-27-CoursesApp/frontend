import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { useParams } from "react-router-dom";
import { Store } from "../../Store";
import axios from "axios";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const params = useParams();
  const { username } = params;
  const [user, setUser] = useState();
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  //Creating course
  const [courseName, setCourseName] = useState("");
  const [courseImage, setCourseImage] = useState("");
  const [courseVideo, setCourseVideo] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/categories`);
        setCategories(data);
        setCourseCategory(data[0].id);
      } catch (error) {
        console.log("Error fetching categories");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/user/${username}`);
        setUser(data);
        setImageUrl(data.imageUrl);
        setDescription(data.description);
      } catch (error) {
        console.log("Error fetching user");
      }
    };
    if (username == userInfo.username) {
      setUser(userInfo);
      setImageUrl(userInfo.imageUrl);
      setDescription(userInfo.description);
    } else {
      fetchData();
    }
  }, [userInfo, username]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/user/courses/${user.id}`);
        setCourses(data);
      } catch (error) {
        console.log("Error fetching courses");
      }
      if (refresh) {
        setRefresh(false);
      }
    };
    if (user) {
      fetchData();
    }
  }, [user, refresh]);

  const editProfile = async () => {
    if (userInfo.description != description || userInfo.imageUrl != imageUrl) {
      try {
        const { data } = await axios.put("/api/user/edit", {
          id: userInfo.id,
          username: userInfo.username,
          email: userInfo.email,
          name: userInfo.name,
          surname: userInfo.surname,
          role: userInfo.role,
          imageUrl: imageUrl,
          description: description,
        });
        ctxDispatch({ type: "USER_SIGNIN", payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        toast.success("Успешно ажурирање");
      } catch (error) {
        toast.error("Неуспешно ажурирање");
      }
    }
    setIsEdit(false);
  };

  const createCourseHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/courses", {
        user: userInfo,
        courseDto: {
          name: courseName,
          description: courseDescription,
          lecturer: `${userInfo.name} ${userInfo.surname}`,
          category: courseCategory,
          imageUrl: courseImage,
          videoUrl: courseVideo,
          price: coursePrice,
        },
      });
      setCourseName("");
      setCourseImage("");
      setCourseVideo("");
      setCoursePrice("");
      setCourseDescription("");
      setCourseCategory(categories[0].id);
      setRefresh(true);
      toast.success("Успешно креиран курс");
    } catch (error) {
      toast.error("Неуспешно ажурирање");
    }
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
                  placeholder="Внеси слика"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              ) : (
                <img
                  src={
                    user && user.imageUrl
                      ? user.imageUrl
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png"
                  }
                  className="object-cover rounded-lg shadow-md max-h-full text-center"
                  style={{
                    height: "160px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                />
              )}

              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-lg">
                {user && user.name}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
                ></textarea>
              ) : (
                <p>{user && user.description}</p>
              )}
              {user &&
                userInfo.id == user.id &&
                (isEdit ? (
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
                ))}
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="bg-gray-100 flex flex-col items-center  pt-4 pb-5">
        <h2 className="text-3xl font-bold  text-gray-900 sm:text-lg">
          Мои курсеви
        </h2>
        {user && user.role == "lecturer" && userInfo.id == user.id && (
          <button
            onClick={() => setIsCreate(!isCreate)}
            className=" bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Креирај курс
          </button>
        )}
        {isCreate ? (
          <form className="mt-10 w-3/5" onSubmit={createCourseHandler}>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Име на курс
              </label>
              <input
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
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
                value={courseImage}
                onChange={(e) => setCourseImage(e.target.value)}
                type="text"
                name="imageUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Видео
              </label>
              <input
                value={courseVideo}
                onChange={(e) => setCourseVideo(e.target.value)}
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
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                type="number"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Категорија
              </label>
              <select
                value={courseCategory}
                onChange={(e) => setCourseCategory(e.target.value)}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Опис
              </label>
              <textarea
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
