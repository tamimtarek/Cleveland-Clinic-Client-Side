// import React from 'react';

import { useEffect, useState } from "react";
import OurServiceCard from "./OurServiceCard";
import { Link } from "react-router-dom";
// import { CiHeadphones } from "react-icons/ci";
// import OurServiceCard from "./OurServiceCard";
import { FcOvertime } from "react-icons/fc";
import { GrPhone } from "react-icons/gr";
import { TfiLocationPin } from "react-icons/tfi";
import Extraroute from "./Extraroute";
import ExtraRoutetwo from "./ExtraRoutetwo";
// import Extraroute from "./Extraroute";
// import Extraroute from "./Extraroute";

const OurserviceArea = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-one-plum.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      {/* search-start */}
      <div className="text-center mt-10 ">
        <div className="mt-10">
          <h1 className="md:text-5xl text-4xl md:font-bold font-semibold text-center">
            Find Your Best Doctors
          </h1>
          <h1 className="text-2xl my-5 font-bold text-center">Find a Doctor</h1>
        </div>
        <div className="md:join w-[90%] ">
          <select
            //   onChange={handleSortChange}
            className="select select-bordered w-[90%] block mx-auto join-item"
          >
            <option defaultValue>Average Cost</option>
          </select>

          <select
            // onChange={handleSortChange}
            className="select select-bordered w-[90%] block mx-auto my-3 join-item"
          >
            <option defaultValue>Average Vistior</option>
          </select>

          <select className="select select-bordered w-[90%] block mx-auto join-item">
            <option value="seasonality" defaultValue>
              Seasonality
            </option>
          </select>
          <div className="">
            <button className="bg-green-500 btn md:w-36 join-item">
              Find Your Hope{" "}
            </button>
          </div>
        </div>
      </div>
      {/* search-end */}
      <div className="mt-8">
        <h1 className="text-green-700 mt-5 font-bold text-center text-4xl">
          Services
        </h1>
        <h1 className="text-4xl lg:text-3xl text-center font-bold mt-2 mb-5">
          Explore
          <span className="ml-2 mb-4 text-green-700">Our </span> Service Area
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.slice(0, 6).map((service) => (
            <OurServiceCard
              key={service._id}
              service={service}
            ></OurServiceCard>
          ))}
        </div>
      </div>

      <div>
        <h1 className=" my-6 text-3xl text-center font-extrabold">
          All Service
        </h1>
      </div>
      <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span className="font-bold text-green-600">
                Plus free Checkup! Use code:
              </span>
              <span className="font-bold text-lg"></span>
            </div>
            <Link
              to="/service"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                All Service
              </span>
              <span className="relative invisible ">All Service</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex flex-col md:flex-row justify-center">
        <div className="stats shadow">
          <div className="stat text-white bg-black">
            <div className="stat-figure text-primary"></div>
            <div className="text-5xl md:text-4xl">
              <FcOvertime />
            </div>
            <div className="stat-title text-white text-2xl md:text-xl">
              We are open monday-friday
            </div>
            <div className="stat-value text-primary text-3xl md:text-2xl font-bold">
              7:00 am - 9:00 pm
            </div>
            <div className="stat-desc"></div>
          </div>

          <div className="bg-black stat mt-4 md:mt-0 md:ml-4">
            <div className="stat-title text-2xl text-white">
              <div className="stat-figure text-secondary text-4xl">
                <GrPhone />
              </div>
              Have a question?
            </div>
            <div className="stat-value text-secondary">+2546 251 2658</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat bg-black mt-4 md:mt-0 md:ml-4">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full"></div>
              </div>
            </div>
            <div className="text-5xl md:text-4xl text-purple-500">
              <TfiLocationPin />
            </div>
            <div className="stat-value text-white">
              Need a repair? our address
            </div>
            <div className="stat-title">Tasks done</div>
            {/* <div className="stat-desc text-purple-500"></div> */}
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <Extraroute></Extraroute>
      <ExtraRoutetwo></ExtraRoutetwo>
      {/* <Extraroute></Extraroute> */}
    </div>
  );
};

export default OurserviceArea;
