import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Pagination } from "@mui/material";
import Lecturer from "../../Components/Lecturer/Lecturer";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

const LecturersPage = () => {
  const params = useParams();
  const { category } = params;
  const [lecturers, setLecturers] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/user/lecturers?page=${page}`);
        setLecturers(data.lecturers);
        setPage(data.page);
        setPages(data.pages);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching categories");
      }
    };
    fetchData();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // PlaceHolder for a lecturers
  const lecturer1 = {
    id: 1,
    slug: "lecturer#1",
    name: "Dr. Evelyn Steele",
    description:
      "Професорката Евелин Стил е истакнат член на факултетот на Универзитетот MIT, позната" +
      "по своето искуство во областа на сајбер безбедноста. Со повеќе децении искуство во истражувањето и примената на сајбер безбедност, професорката" +
      "Стил носи богатство на знаење и страст за образованието на својата улога како едукатор.",
    email: "evelynsteele@gmail.com",
  };
  const lecturer2 = {
    id: 2,
    slug: "lecturer#2",
    name: "Dr. Benjamin Hughes",
    description:
      "Професорот Бенџамин Хјуз е истакнат член на факултетот на Универзитетот MIT, позната" +
      "по своето искуство во областа на сајбер безбедноста. Со повеќе децении искуство во истражувањето и примената на сајбер безбедност, професорката" +
      "Стил носи богатство на знаење и страст за образованието на својата улога како едукатор.",
    email: "benjaminhughes@yahoo.com",
  };
  const lecturer3 = {
    id: 1,
    slug: "lecturer#1",
    name: "Dr. Evelyn Steele",
    description:
      "Професорката Евелин Стил е истакнат член на факултетот на Универзитетот MIT, позната" +
      "по своето искуство во областа на сајбер безбедноста. Со повеќе децении искуство во истражувањето и примената на сајбер безбедност, професорката" +
      "Стил носи богатство на знаење и страст за образованието на својата улога како едукатор.",
    email: "evelynsteele@gmail.com",
  };
  const lecturer4 = {
    id: 1,
    slug: "lecturer#1",
    name: "Dr. Evelyn Steele",
    description:
      "Професорката Евелин Стил е истакнат член на факултетот на Универзитетот MIT, позната" +
      "по своето искуство во областа на сајбер безбедноста. Со повеќе децении искуство во истражувањето и примената на сајбер безбедност, професорката" +
      "Стил носи богатство на знаење и страст за образованието на својата улога како едукатор.",
    email: "evelynsteele@gmail.com",
  };

  return (
    <>
      <Header page={"Lecturers"} />
      <div className={"dark:bg-gray-500"}>
        <h2 className="text-center mt-5 text-3xl">{category}</h2>
        <div className="flex justify-around mt-5 w-11/12 m-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 mt-5">
            {isLoading ? (
              <CircularProgress size="1rem" color="inherit" />
            ) : (
              lecturers.map((l) => <Lecturer key={l.id} lecturer={l} />)
            )}
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <Pagination
            count={pages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            className="mt-10 mb-10"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LecturersPage;
