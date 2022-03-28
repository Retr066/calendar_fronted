import { Navigate, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../pages/Login/LoginScreen";
import { RegisterScreen } from "../pages/Register/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div className="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </div>
  );
};
