import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { RootState } from "../model/rootReducer";
import { CalendarScreen } from "../pages/Calendar/CalendarScreen";
import { LoaderScreen } from "../pages/Loader/Loader";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { checking, uid } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const sleepFc = useCallback(async () => {
    await sleep(1000);
    dispatch(startChecking());
  }, [dispatch]);

  useEffect(() => {
    sleepFc();
  }, [sleepFc]);

  if (checking) {
    return <LoaderScreen />;
  }

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="auth/*"
            element={
              <PublicRoute isAuth={!!uid}>
                <AuthRouter />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/"
            element={
              <PrivateRoute isAuth={!!uid}>
                <CalendarScreen />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </>
  );
};
