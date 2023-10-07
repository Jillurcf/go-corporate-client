// import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";


const Services = () => {
    // const services = useLoaderData()
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("./service.json")
        .then(res => res.json())
        .then(data=> setServices(data))
        
    },[])
    console.log(services);
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-center text-6xl m-36 font-bold">Service We Provide</h1>
         <div className="mx-auto max-w-screen-2xl grid gap-10 grid-cols-1 md:grid-cols-3">
         {
            services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
           }
         </div>
           
        </div>
    );
};

export default Services;