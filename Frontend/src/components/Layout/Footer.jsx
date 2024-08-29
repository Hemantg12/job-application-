import { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer
      className={`${
        isAuthorized ? "block" : "hidden"
      } bg-gray-800 text-white py-4`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">&copy; All Rights Reserved by Hemant.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link
            to={"/"}
            target="_blank"
            className="text-white hover:text-blue-500"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={"/"}
            target="_blank"
            className="text-white hover:text-red-500"
          >
            <FaYoutube />
          </Link>
          <Link
            to={"/"}
            target="_blank"
            className="text-white hover:text-blue-700"
          >
            <FaLinkedin />
          </Link>
          <Link
            to={"/"}
            target="_blank"
            className="text-white hover:text-pink-500"
          >
            <RiInstagramFill />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
