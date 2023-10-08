import React from "react";

const Detail = ({ service }) => {
  const { image, name, fullDescription, shortDescription, price } = service;
  console.log(service);
  return (
    <div className="mx-auto m-12">
      <div className="relative flex max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {shortDescription}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </p>
          <p>{fullDescription}</p>
         <div className="flex justify-evenly mt-6">
         <p className="text-blue-700 font-semibold text-xl py-2">{price}</p>
          <button className="btn btn-secondary">Place Order</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
