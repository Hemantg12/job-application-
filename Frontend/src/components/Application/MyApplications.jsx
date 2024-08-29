import { useContext, useEffect, useState } from "react";

import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";

import ResumeModal from "./ResumeModal";
import JobSeekerCard from "./JobSeekerCard";
import EmployerCard from "./EmployerCard";
import { useNavigate } from "react-router-dom";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const { user, isAuthorized } = useContext(Context);
  console.log(user.role);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (user && user.role === "Employer") {
          axios
            .get("/api/v1/application/employer/getall", {
              withCredentials: true,
            })
            .then((res) => {
              setApplications(res.data.applications);
            });
        } else {
          axios
            .get("http://localhost:4000/api/v1/application/jobseeker/getall", {
              withCredentials: true,
            })
            .then((res) => {
              setApplications(res.data.applications);
            });
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchApplications();
  }, [isAuthorized]);
  const navigateto = useNavigate();
  if (!isAuthorized) {
    navigateto("/");
  }

  const deleteApplication = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/v1/application/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      setApplications((prevApplications) =>
        prevApplications.filter((application) => application._id !== id)
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete application"
      );
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          {user && user.role === "Job Seeker"
            ? "My Applications"
            : "Applications From Job Seekers"}
        </h1>
        {applications.length <= 0 ? (
          <h4 className="text-xl">No Applications Found</h4>
        ) : (
          applications.map((element) => {
            const CardComponent =
              user.role === "Job Seeker" ? JobSeekerCard : EmployerCard;
            return (
              <CardComponent
                key={element._id}
                element={element}
                deleteApplication={deleteApplication}
                openModal={openModal}
              />
            );
          })
        )}
      </div>
      {modalOpen && (
        <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />
      )}
    </section>
  );
};

export default MyApplications;
