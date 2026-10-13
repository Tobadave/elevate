// import { hero, clients, theme } from "../constants";
import Hero from "./Hero";
import About from "./About";
import Cards from "./Cards";
import Cta from "./Cta";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Cards />
      <Cta />
      <Footer />
    </>
  );
};

export default LandingPage;
