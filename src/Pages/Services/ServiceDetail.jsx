import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from "./Detail";




const ServiceDetail = () => {
    const [service, setService] = useState([])
    const {id} = useParams()
    const services = useLoaderData()
    useEffect(()=>{
        const findDetail = services.find(item=> item.id ===id)
        setService(findDetail)
    },[id, services])
    console.log(services);
    
    return (
        <div>
           
            <div className="h-[50vh] items-center max-w-screen-2xl flex mx-auto">
         
                <Detail service={service}></Detail>
                
            </div>
        </div>
    );
};

export default ServiceDetail;