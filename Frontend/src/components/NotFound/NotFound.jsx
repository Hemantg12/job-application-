import { Link } from "react-router-dom";
import Image from "../../assets/notfound.png";
const NotFound = () => {
  return (
    <section className="page notfound">
      <div className="content">
        <img src={Image} alt="not Found" />
        <Link to="/">Return to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
