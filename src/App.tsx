import FirstPage from "./components/FirstPage";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";
import ProfilePage from "./components/ProfilePage";
import ConnectPage from "./components/ConnectPage";
import { AnimatePresence } from "framer-motion";
import LoadingPage from "./components/LoadingPage";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
      <LoadingPage isLoading={isLoading} />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </>
  );
}

export default App;
