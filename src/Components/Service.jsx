// import React from 'react';

import { useEffect, useState } from "react";
import OurServiceCard from "./OurServiceCard";
import { IoSearch } from "react-icons/io5";
const Service = () => {
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-one-plum.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(search);
  return (
    <div>
      {/* service search-start */}
      <div className="text-center mt-10 ">
        <div className="mt-10">
          <h1 className="md:text-5xl text-4xl md:font-bold font-semibold text-center">
            Find Your Your Best Doctor
          </h1>
          <h1 className="text-2xl my-5 font-bold text-center">Find a Tutor</h1>
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
        {/* search img-start */}
        <section className="w-full my-5">
          <div className="w-full h-[300px] bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
            {/* <!-- Photo by '@insolitus' on Unsplash --> */}
            <div>
              <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
                Search our best services
              </h1>
            </div>
            <div className="w-3/4 mx-auto">
              <label className="my-5 input input-bordered bg-slate-700 flex items-center gap-2">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className="grow"
                  placeholder="Type here"
                />
                <IoSearch className="text-xl"> </IoSearch>
              </label>
            </div>
          </div>
        </section>
        {/* search img-end */}

        {/* search function */}
        <div>
          {/* <label className="my-5 input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="grow"
              placeholder="Type here"
            />
            <IoSearch className="text-xl"> </IoSearch>
          </label> */}
        </div>
      </div>
      {/* service search-end */}
      <div>
        <h1 className="text-2xl font-bold text-green-700 text-center my-5 ">
          Service
        </h1>
        <p className="text-2xl text-center">
          Explore our All{" "}
          <span className="font-bold text-green-700">Service Area</span>
        </p>
        <div className="grid grid-cols-1 shadow-2xl md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 ">
          {services
            ?.filter((item) => {
              return search.toUpperCase() === ""
                ? item
                : item.service_name
                    .toUpperCase()
                    .includes(search.toUpperCase());
            })
            .map((service) => (
              <OurServiceCard
                key={service._id}
                service={service}
              ></OurServiceCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
