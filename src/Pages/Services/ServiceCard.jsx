
import { Link } from "react-router-dom";
import AosAnimation from "../Home/AosAnimation";


const ServiceCard = ({ service }) => {
  const { id, name, image, price, shortDescription, fullDescription } = service;

  return (
    <div className="max-w-screen-2xl mx-auto">
      
      <div className="m-12 card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDescription}</p>
         
          <div className="card-actions justify-end">
            <p>{price}</p>
            <button className="btn btn-primary"> <Link to={`/serviceDetail/${id}`}>View Details</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
