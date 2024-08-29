import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowltWorks from "./HowltWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  //console.log(isAuthorized);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="homePage page ">
      <HeroSection />
      <HowltWorks />
      <PopularCategories />
      <PopularCompanies />
    </section>
  );
};

export default Home;
