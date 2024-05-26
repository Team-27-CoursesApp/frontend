import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockIcon from "@mui/icons-material/Lock";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const CheckoutPage = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo, cart } = state;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const paymentHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/courses/payment", {
        user: userInfo,
        courses: cart.cartItems,
      });
      localStorage.removeItem("cartItems");
      ctxDispatch({ type: "CART_CLEAR" });
      toast.success("Успешно плаќање");
      setIsLoading(false);
      navigate(`/profile/${userInfo.username}`);
    } catch (error) {
      toast.error("Неуспешна најава");
    }
  };
  return (
    <>
      <Header page={"Courses"} />
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style={{ maxWidth: "600px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <CreditCardIcon className="mdi mdi-credit-card-outline text-3xl" />
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Информации за плаќање
            </h1>
          </div>
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="h-8 ml-3"
              />
            </div>
          </div>
          <form onSubmit={paymentHandler}>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">
                Име и презиме
              </label>
              <div>
                <input
                  required
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="John Smith"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">
                Број на картичка
              </label>
              <div>
                <input
                  required
                  minLength={16}
                  maxLength={16}
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">
                  Дата на истекување
                </label>
                <div>
                  <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="01">01 - Јануари</option>
                    <option value="02">02 - Февруари</option>
                    <option value="03">03 - Март</option>
                    <option value="04">04 - Април</option>
                    <option value="05">05 - Мај</option>
                    <option value="06">06 - Јуни</option>
                    <option value="07">07 - Јули</option>
                    <option value="08">08 - Август</option>
                    <option value="09">09 - Септември</option>
                    <option value="10">10 - Октомври</option>
                    <option value="11">11 - Ноември</option>
                    <option value="12">12 - Декември</option>
                  </select>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
            </div>
            <div className="mb-10">
              <label className="font-bold text-sm mb-2 ml-1">CVV2/CVC2</label>
              <div>
                <input
                  required
                  minLength={3}
                  maxLength={3}
                  className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="000"
                  type="text"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
              >
                {isLoading ? (
                  <CircularProgress size="1rem" color="inherit" />
                ) : (
                  <>
                    <LockIcon /> {"ПЛАТИ"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
