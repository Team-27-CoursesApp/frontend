import img from "../../assets/background.png";
import EastIcon from "@mui/icons-material/East";

const HomePage = () => {
  return (
    <div className="flex justify-evenly items-center md:flex-row flex-col">
      <img src={img} className="w-1/3 h-1/3" />
      <div className="flex flex-col justify-evenly items-center h-96">
        <button className="cursor-pointer px-5 py-4 text-lg bg-blue-600 border border-blue-600 rounded text-white uppercase">
          <p className="text-2xl uppercase flex items-center font-bold">
            Погледни ги курсевите
            <span className="ml-4">
              <EastIcon style={{ fontSize: "30px" }} />
            </span>
          </p>
        </button>
        <div>
          <p className="text-2xl uppercase flex items-center font-bold ">
            <EastIcon />
            Научете креативни вештини за да ги постигнете вашите лични и
            професионални цели
          </p>
          <p className="text-2xl uppercase flex items-center font-bold">
            <EastIcon />
            Прилагодете се и израмнете се со свое темпо
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
