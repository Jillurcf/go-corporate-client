
import AboutUs from '../AboutUs/AboutUs';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';

import Slider from './Slider/Slider';




const Home = () => {
    return (
        <div>
        
          <Slider></Slider>
          <Services></Services>
          <AboutUs></AboutUs>
        </div>
    );
};

export default Home;