import specialOfferImage from "/public/specialoffer.jpg";

const SpecialOffer = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-6xl py-8 text-pink-700">Our special Offer, <span className="text-blue-700">if Order now!!</span> </h2>
      <div className="relative px-8 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img src={specialOfferImage}/>
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        
          </h4>
          <button className="text-2xl font-bold absolute top-[50%] btn btn-secondary">
            Upto 7O% Discount
          </button>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2">
          <a
            href="#facebook"
            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
