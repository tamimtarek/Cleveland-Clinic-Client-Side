// import React from 'react';

import { useEffect, useState } from "react";
import OurServiceCard from "./OurServiceCard";
import { IoSearch } from "react-icons/io5";
const Service = () => {
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://cleveland-server-side.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(search);
  return (
    <div>
      {/* service search-start */}
      <div className="text-center mt-10 ">
        
        {/* search img-start */}
        <section className="w-full my-5">
          <div className="w-full h-[300px] bg-[url('data:image/jpeg;base64,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')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
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
