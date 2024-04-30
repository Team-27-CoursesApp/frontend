import img from "../../assets/background.png";
import EastIcon from "@mui/icons-material/East";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header page={"Home"}/>
            <div className="flex justify-evenly items-center md:flex-row flex-col">
                <img src={img} className="w-1/3 h-1/3"/>
                <div className="flex flex-col justify-evenly items-center h-96 w-4/5 md:w-full">
                    <button
                        onClick={() => navigate("/courses")}
                        className="cursor-pointer px-5 py-4 text-lg bg-blue-600 border border-blue-600 rounded text-white uppercase"
                    >
                        <p className="text-lg md:text-2xl uppercase flex items-center font-bold">
                            Погледни ги курсевите
                            <span className="ml-4">
                <EastIcon/>
              </span>
                        </p>
                    </button>
                    <div>
                        <div className="flex">
                            <EastIcon/>
                            <p className="md:text-xl text-base uppercase flex items-center font-bold ">
                                Научете креативни вештини за да ги постигнете вашите лични и
                                професионални цели
                            </p>
                        </div>
                        <div className="flex mt-3">
                            <EastIcon/>
                            <p className="md:text-xl text-base uppercase flex items-center font-bold ">
                                Прилагодете се и израмнете се со свое темпо
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default HomePage;
