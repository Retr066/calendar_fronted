import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  isAuth: boolean;
  children: React.ReactNode;
}
export const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuth, children }): any => {
  return isAuth ? children : <Navigate to="/auth/login" />;
};
