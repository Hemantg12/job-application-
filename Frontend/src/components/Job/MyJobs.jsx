// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { FaCheck } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";

// const MyJobs = () => {
//   const [myJobs, setmyJobs] = useState([]);
//   const [edit, setEdit] = useState(null);

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         await axios
//           .get("http://localhost:4000/api/v1/job/getmyjobs", {
//             withCredentials: true,
//           })
//           .then((res) => setmyJobs(res.data.myJobs));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchdata();
//   }, []);

//   const handleedit = (elementID) => {
//     setEdit(elementID);
//   };

//   const handledisableedit = () => {
//     setEdit(null);
//   };
//   console.log(edit);
//   const deletehandler = (id) => {
//     axios
//       .delete(`http://localhost:4000/api/v1/job/delete/${id}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         toast.success(res.data.message);

//         setmyJobs((prevJobs) => prevJobs.filter((job) => job._id != id));
//       });
//   };
//   const handleinputchange = (id, field, value) => {
//     console.log(id, field, value);
//     setmyJobs((prevjobs) =>
//       prevjobs.map((job) => (job._id == id ? { ...job, [field]: value } : job))
//     );
//   };
//   const handleupdate = async (id) => {
//     const updatedJob = myJobs.find((job) => job._id == id);
//     console.log(updatedJob);
//     await axios
//       .put(`http://localhost:4000/api/v1/job/update/${id}`, updatedJob, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         toast.success(res.data.message);
//         setEdit(null);
//       })
//       .catch((error) => toast.error(error.res.data.message));
//   };
//   return (
//     <div className="myJobs page ">
//       {myJobs.length > 0 &&
//         myJobs.map((el) => {
//           return (
//             <div
//               key={el._id}
//               className="flex gap-x-10 w-full h-full justify-center "
//             >
//               <div className="m-10 text-black border-black border-solid border-2 p-10 text-wrap  w-2/3 h-1/3 ">
//                 <input
//                   type="text"
//                   value={el.title}
//                   className="input input-bordered input-primary w-full max-w-xs my-5 mx-2 hover:text-black"
//                   disabled={edit != el._id ? true : false}
//                   onChange={(e) =>
//                     handleinputchange(el._id, "title", e.target.value)
//                   }
//                 />
//                 <textarea
//                   type=""
//                   value={el.description}
//                   className="input input-bordered w-full max-w-xsi my-5  border-teal-500 mx-2"
//                   disabled={edit != el._id ? true : false}
//                   onChange={(e) =>
//                     handleinputchange(el._id, "description", e.target.value)
//                   }
//                 />
//                 <input
//                   type="text"
//                   value={el.category}
//                   className="input input-bordered input-primary w-full max-w-xs my-5 mx-2"
//                   disabled={edit != el._id ? true : false}
//                   onChange={(e) =>
//                     handleinputchange(el._id, "category", e.target.value)
//                   }
//                 />
//                 <input
//                   type="text"
//                   value={el.country}
//                   className="input input-bordered input-primary w-full max-w-xs my-5 mx-2"
//                   disabled={edit != el._id ? true : false}
//                   onChange={(e) =>
//                     handleinputchange(el._id, "country", e.target.value)
//                   }
//                 />
//                 <input
//                   type="text"
//                   value={el.city}
//                   className="input input-bordered input-primary w-full max-w-xs my-5 mx-2"
//                   disabled={edit != el._id ? true : false}
//                   onChange={(e) =>
//                     handleinputchange(el._id, "city", e.target.value)
//                   }
//                 />
//                 <input
//                   type="text"
//                   value={el.location}
//                   className="input input-bordered w-full max-w-xs my-5 border-teal-500 mx-2"
//                   disabled={edit != el._id ? true : false}
//                   onChange={(e) =>
//                     handleinputchange(el._id, "location", e.target.value)
//                   }
//                 />
//               </div>

//               <div className="align-middle flex justify-center items-center gap-16 ">
//                 {edit == el._id ? (
//                   <div>
//                     <div
//                       className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white hover:bg-indigo-200 text-red-600"
//                       onClick={() => handleupdate(el._id)}
//                     >
//                       <FaCheck className="text-green-500 hover:text-green-500 font-extrabold overflow-y-hidden" />
//                     </div>
//                     <div
//                       className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white hover:bg-red-300 text-red-400"
//                       onClick={() => handledisableedit()}
//                     >
//                       <RxCross2 className="text-red-500 hover:text-red-500 font-extrabold overflow-y-hidden" />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex-row justify-center ">
//                     <div>
//                       <button
//                         className="btn-square text-green-500  font-extrabold  overflow-y-hidden"
//                         onClick={() => handleedit(el._id)}
//                       >
//                         Edit
//                       </button>
//                     </div>
//                     <div>
//                       <button
//                         onClick={() => deletehandler(el._id)}
//                         className="btn-square text-red-500 hover:text-red-500 font-extrabold overflow-y-hidden"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default MyJobs;

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import "./MyJobs.css";
import { Context } from "./../../main";
import { useNavigate } from "react-router-dom";
const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [edit, setEdit] = useState(null);
  const { user, isAuthorized } = useContext(Context);
  const navigate = useNavigate();
  if ((user && user.role === "Job Seeker") || !isAuthorized) {
    navigate("/");
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/v1/job/getmyjobs",
          {
            withCredentials: true,
          }
        );
        setMyJobs(res.data.myJobs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (elementID) => {
    setEdit(elementID);
  };

  const handleDisableEdit = () => {
    setEdit(null);
  };

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/v1/job/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    } catch (error) {
      toast.error("Failed to delete the job");
      console.log(error);
    }
  };

  const handleInputChange = (id, field, value) => {
    setMyJobs((prevJobs) =>
      prevJobs.map((job) => (job._id === id ? { ...job, [field]: value } : job))
    );
  };

  const handleUpdate = async (id) => {
    const updatedJob = myJobs.find((job) => job._id === id);
    try {
      const res = await axios.put(
        `http://localhost:4000/api/v1/job/update/${id}`,
        updatedJob,
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      setEdit(null);
    } catch (error) {
      toast.error("Failed to update the job");
      console.log(error);
    }
  };

  return (
    <div className="myJobs page container mx-auto p-5">
      {myJobs.length > 0 &&
        myJobs.map((el) => (
          <div
            key={el._id}
            className="flex flex-col md:flex-row gap-4 md:gap-10 w-full h-full justify-center mb-6"
          >
            <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border border-gray-300 shadow-lg rounded-lg w-full md:w-2/3">
              <input
                type="text"
                value={el.title}
                className={`input input-bordered w-full my-2 text-gray-800 ${
                  edit !== el._id ? "input-disabled-custom" : ""
                }`}
                disabled={edit !== el._id}
                onChange={(e) =>
                  handleInputChange(el._id, "title", e.target.value)
                }
              />
              <textarea
                value={el.description}
                className={`input input-bordered w-full my-2 text-gray-800 ${
                  edit !== el._id ? "input-disabled-custom" : ""
                }`}
                disabled={edit !== el._id}
                onChange={(e) =>
                  handleInputChange(el._id, "description", e.target.value)
                }
              />
              <input
                type="text"
                value={el.category}
                className={`input input-bordered w-full my-2 text-gray-800 ${
                  edit !== el._id ? "input-disabled-custom" : ""
                }`}
                disabled={edit !== el._id}
                onChange={(e) =>
                  handleInputChange(el._id, "category", e.target.value)
                }
              />
              <input
                type="text"
                value={el.country}
                className={`input input-bordered w-full my-2 text-gray-800 ${
                  edit !== el._id ? "input-disabled-custom" : ""
                }`}
                disabled={edit !== el._id}
                onChange={(e) =>
                  handleInputChange(el._id, "country", e.target.value)
                }
              />
              <input
                type="text"
                value={el.city}
                className={`input input-bordered w-full my-2 text-gray-800 ${
                  edit !== el._id ? "input-disabled-custom" : ""
                }`}
                disabled={edit !== el._id}
                onChange={(e) =>
                  handleInputChange(el._id, "city", e.target.value)
                }
              />
              <input
                type="text"
                value={el.location}
                className={`input input-bordered w-full my-2 text-gray-800 ${
                  edit !== el._id ? "input-disabled-custom" : ""
                }`}
                disabled={edit !== el._id}
                onChange={(e) =>
                  handleInputChange(el._id, "location", e.target.value)
                }
              />
            </div>

            <div className="flex items-center justify-center gap-4 md:gap-6">
              {edit === el._id ? (
                <div className="flex gap-4">
                  <button
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-500 hover:bg-green-700 text-white"
                    onClick={() => handleUpdate(el._id)}
                  >
                    <FaCheck className="font-extrabold" />
                  </button>
                  <button
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-500 hover:bg-red-700 text-white"
                    onClick={handleDisableEdit}
                  >
                    <RxCross2 className="font-extrabold" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-2">
                  <button
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500 hover:bg-blue-700 text-white"
                    onClick={() => handleEdit(el._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-500 hover:bg-red-700 text-white"
                    onClick={() => deleteHandler(el._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyJobs;
