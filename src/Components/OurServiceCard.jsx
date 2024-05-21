// import React from 'react';

import { Link } from "react-router-dom";

const OurServiceCard = ({ service }) => {
  const {
    _id,
    service_description,
    service_price,
    service_name,
    service_image,
    customer_name,
    customer_photo,
    service_provider,
    // image,
  } = service || {};
  // console.log(service);
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg h-[600px] w-full min-h-[300px]">
          <img
            src={service_image}
            alt="Mountain"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              <span className="font-bold underline">Service Name: </span>{" "}
              {service_name}
            </h2>
            <p className="text-gray-700 leading-tight mb-4">
              <span className="font-bold underline">Service-Description:</span>{" "}
              {service_description}
            </p>
            <div className="flex flex-col mb-auto sm:flex-row justify-between items-center">
              <div className="flex items-center">
                <img
                  src={service_provider?.image}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span className="mr-4 text-gray-800 font-semibold">
                  <span className="font-bold text-black">Name: </span>{" "}
                  {service_provider?.name}
                </span>
              </div>
              <span className="text-gray-600">
                <span className="font-bold text-black ">Service_Price:</span>{" "}
                {service_price}
              </span>
            </div>
            {/* btn */}
            <Link
              to={`/details/${_id}`}
              className="relative mt-4 inline-flex items-center px-6 sm:px-12 py-3 overflow-hidden text-lg w-full font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block  w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">View Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceCard;
