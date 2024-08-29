import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Context } from "./main";
import { Toaster } from "react-hot-toast";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import JobDetails from "./components/Job/JobDetails";
import PostJob from "./components/Job/PostJob";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import MyJobs from "./components/Job/MyJobs";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import { useContext, useEffect } from "react";
import axios from "axios";
const App = () => {
  const { setUser, isAuthorized, setIsAuthorized } = useContext(Context);
  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await axios.get("/api/v1/user/getuser", {
          withCredentials: true,
        });
        setUser(response.data.user);
        setIsAuthorized(true);
      };
      fetchUser();
    } catch (error) {
      setIsAuthorized(false);
    }
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
