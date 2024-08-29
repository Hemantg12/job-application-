import PropTypes from "prop-types";
//it is a job seeker card
const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md job_seeker_card">
      <div className="detail">
        <p className="text-lg">
          <span className="font-semibold">Name:</span> {element.name}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Email:</span> {element.email}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Phone:</span> {element.phone}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Address:</span> {element.address}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Cover Letter:</span>{" "}
          {element.coverLetter}
        </p>
      </div>
      <div className="mt-4 resume">
        <img
          src={element.resume.url}
          alt="resume"
          className="w-full h-auto cursor-pointer"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
      <div className="mt-4 btn_area">
        <button
          onClick={() => deleteApplication(element._id)}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Delete Application
        </button>
      </div>
    </div>
  );
};

JobSeekerCard.propTypes = {
  element: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    coverLetter: PropTypes.string.isRequired,
    resume: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  deleteApplication: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default JobSeekerCard;
