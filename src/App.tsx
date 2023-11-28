import FirstPage from "./components/FirstPage";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";
import ProfilePage from "./components/ProfilePage";
import ConnectPage from "./components/ConnectPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </>
  );
}

export default App;
