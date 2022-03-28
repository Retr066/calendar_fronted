import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { CalendarScreen } from "../pages/Calendar/CalendarScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const isAuth = false;

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="auth/*"
            element={
              <PublicRoute isAuth={isAuth}>
                <AuthRouter />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/"
            element={
              <PrivateRoute isAuth={isAuth}>
                <CalendarScreen />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};
