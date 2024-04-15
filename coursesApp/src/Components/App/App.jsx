import LoginPage from "../../Pages/Login/LoginPage"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterPage from "../../Pages/Register/RegisterPage";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import HomePage from "../../Pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
