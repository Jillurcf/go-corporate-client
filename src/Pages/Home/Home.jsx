
import NavBar from '../NavBar/NavBar';

import Slider from './Slider/Slider';




const Home = () => {
    return (
        <div>
          
            <NavBar></NavBar>
            <h2 className='text-2xl'>This is home</h2>
          <Slider></Slider>
        </div>
    );
};

export default Home;