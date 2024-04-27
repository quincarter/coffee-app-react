import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";

import { AuthProvider } from "./utils/AuthContext";
import RegisterPageMaterial from "./pages/RegisterPageMaterial";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPageMaterial />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
