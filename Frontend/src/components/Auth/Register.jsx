import { useContext, useState } from "react";
import { Context } from "../../main";
import register from "../../assets/register.png";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { FaPencilAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { RiLock2Fill } from "react-icons/ri";
import Jobzee from "../../assets/JobZeelogo.png";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const { setUser, isAuthorized, setIsAuthorized } = useContext(Context);
  const handleRegister = async (e) => {
    e.preventDefault;
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { email, password, phone, name, role },
        {
          withCredentials: true,
          header: {
            "Content-Type": "Application/Json",
          },
        }
      );
      toast.message(data.message);
      setIsAuthorized(true);
      setEmail("");
      setName("");
      setPassword("");
      setPhone("");
      setRole("");
      setUser("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <div className="authPage">
        <div className="container">
          <div className="header">
            <img src={Jobzee} alt="logo" />
            <h3>Create a new account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label htmlFor="">Register As</label>

              <div>
                <select
                  name=""
                  id=""
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>

                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label htmlFor="">Name</label>

              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Hemant"
                />
                <FaPencilAlt />
              </div>
            </div>
            <div className="inputTag">
              <label htmlFor="">Email Address</label>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label htmlFor="">Phone</label>

              <div>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="123456789"
                />
                <FaPhoneFlip />
              </div>
            </div>
            <div className="inputTag">
              <label htmlFor="">Password</label>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
                <RiLock2Fill />
              </div>
            </div>
            <button onClick={handleRegister} type="submit">
              Register
            </button>
            <label>Already Registered?</label>
            <Link to={"/login"}> Login Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src={register} alt="register" />
        </div>
      </div>
      ;
    </>
  );
};

export default Register;
