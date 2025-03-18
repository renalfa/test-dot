import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import LoginPage from "./pages/login-page";
import DashboardPage from "./pages/dashboard-page";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
