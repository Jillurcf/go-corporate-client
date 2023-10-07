
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AosAnimation = () => {
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
      },[])
    return (
        <div data-aos="fade-up">
            
        </div>
    );
};

export default AosAnimation;