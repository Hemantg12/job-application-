import PropTypes from "prop-types";

const EmployerCard = ({ element, openModal }) => {
  return (
    <div className="job_seeker_card bg-white shadow-md rounded-lg p-4 mb-4">
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
      <div className="resume mt-4">
        <img
          src={element.resume.url}
          alt="resume"
          className="w-full h-auto cursor-pointer"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
    </div>
  );
};

EmployerCard.propTypes = {
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
  openModal: PropTypes.func.isRequired,
};

export default EmployerCard;
