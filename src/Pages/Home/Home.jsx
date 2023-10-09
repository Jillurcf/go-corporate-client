import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";


import Slider from "./Slider/Slider";

const Home = () => {
 
  return (
    <div>
       
      <Slider></Slider>
      <Services></Services>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
