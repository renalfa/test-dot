import { FC } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
