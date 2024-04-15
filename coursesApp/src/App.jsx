import LoginPage from "./Pages/Login/LoginPage"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterPage from "./Pages/Register/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
