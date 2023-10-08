import { useLoaderData } from "react-router-dom";
import SpeacialFeaturesCard from "./SpeacialFeaturesCard";


const SpecialFeatures = () => {
    const specialFeatures = useLoaderData()
    console.log(specialFeatures);
    return (
        <div>
            <h1 className="text-6xl font-bold text-center mt-4">Our Special Featrues</h1>
          {
            specialFeatures.map(feature => <SpeacialFeaturesCard key={feature.id} feature={feature}></SpeacialFeaturesCard>)
          }
        </div>
    );
};

export default SpecialFeatures;