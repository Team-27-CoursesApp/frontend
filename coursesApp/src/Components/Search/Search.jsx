import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../../Store";

const Search = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [courses, setCourses] = useState([]);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const navigation = (id) => {
    if (userInfo) {
      setText("");
      navigate(`/course/${id}`);
    } else {
      toast.error("Најавете се за да пристапите до курсот");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/api/courses/search/${text}`);
        setCourses(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    if (text.length > 0) {
      fetchData();
    }
  }, [text]);
  return (
    <>
      <div className="searchContainer relative">
        <SearchIcon
          className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2"
          style={{ color: "#3851fe" }}
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Пребарувај"
          className={`pl-10 rounded-full py-1 text-lg`}
          style={{ border: "2px solid #3851fe" }}
        />
        {text.length > 0 && (
          <>
            <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {isLoading == true && (
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                  {" "}
                  <CircularProgress size="1rem" color="inherit" />
                </li>
              )}
              {courses &&
                isLoading == false &&
                courses.map((c) => (
                  <li
                    key={c.id}
                    onClick={() => navigation(c.id)}
                    className="px-4 py-2 flex gap-2 cursor-pointer hover:bg-gray-100"
                  >
                    <img
                      src={c.imageUrl}
                      style={{ maxWidth: "60px", Height: "60px" }}
                    />
                    {c.name}
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Search;
