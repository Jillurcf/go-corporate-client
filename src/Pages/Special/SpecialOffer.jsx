import specialOfferImage from "/public/specialoffer.jpg";

const SpecialOffer = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-6xl py-8 text-pink-700">
        Our special Offer, <span className="text-blue-700">if Order now!!</span>{" "}
      </h2>
      <div className="relative px-8 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={specialOfferImage} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"></p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"></p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"></p>
        </div>
        <div className="p-6 pt-0">
          <button
            className=" absolute top-[50%] left-[50%] btn btn-secondary w-[3/4] select-none rounded-lg bg-blue-gray-900/10 px-6 text-center align-middle font-sans text-2xl font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Upto 70% off
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
