import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        console.log(error);
        navigateTo("/notfound");
      });
  }, [id, navigateTo]);

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/login");
    }
  }, [isAuthorized, navigateTo]);

  return (
    <section className="jobDetail page min-h-screen py-10 flex items-center justify-center">
      <div className="container mx-auto px-4 h-5/6">
        <h3 className="text-2xl font-bold mb-6">Job Details</h3>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg">
            <span className="font-semibold">Title:</span> {job.title}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Category:</span> {job.category}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Country:</span> {job.country}
          </p>
          <p className="text-lg">
            <span className="font-semibold">City:</span> {job.city}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Location:</span> {job.location}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Description:</span>{" "}
            {job.description}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Job Posted On:</span>{" "}
            {job.jobPostedOn}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Salary:</span>
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </p>
          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link
              to={`/application/${job._id}`}
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
            >
              Apply Now
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
