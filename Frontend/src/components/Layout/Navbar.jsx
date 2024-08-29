import { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import Job from "../../assets/JobZee-logos__white.png";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  return (
    <nav
      className={`navbar ${
        isAuthorized ? "navbarShow" : "navbarHide"
      } bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-lg`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="logo">
          <img src={Job} alt="logo" className="w-24" />
        </div>
        <ul
          className={`menu ${
            show ? "flex" : "hidden"
          } flex-col md:flex-row md:flex gap-4 items-center`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300"
              onClick={() => setShow(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/job/getall"
              className="hover:text-yellow-300"
              onClick={() => setShow(false)}
            >
              ALL JOBS
            </Link>
          </li>
          <li>
            <Link
              to="/applications/me"
              className="hover:text-yellow-300"
              onClick={() => setShow(false)}
            >
              {user && user.role === "Employer"
                ? "APPLICANT'S APPLICATIONS"
                : "MY APPLICATIONS"}
            </Link>
          </li>
          {user && user.role === "Employer" && (
            <>
              <li>
                <Link
                  to="/job/post"
                  className="hover:text-yellow-300"
                  onClick={() => setShow(false)}
                >
                  POST NEW JOB
                </Link>
              </li>
              <li>
                <Link
                  to="/job/me"
                  className="hover:text-yellow-300"
                  onClick={() => setShow(false)}
                >
                  VIEW YOUR JOBS
                </Link>
              </li>
            </>
          )}
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-800 text-white py-1 px-3 rounded-md"
            >
              LOGOUT
            </button>
          </li>
        </ul>
        <div className="hamburger md:hidden">
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
