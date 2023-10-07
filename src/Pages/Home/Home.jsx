
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import AosAnimation from './AosAnimation';

import Slider from './Slider/Slider';




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