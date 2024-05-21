// import React from 'react';
import axios from "axios";
import img1 from "../assets/image/pexels-pavel-danilyuk-view.jpg";
import { Link, useLoaderData } from "react-router-dom";
// import { getAuth } from "firebase/auth";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  // const navigate = useNavigate();
  // console.log();
  const {
    _id,
    service_price,
    service_name,
    service_image,
    service_description,
    service_provider,
    image,

    service_location,
  } = service;

  const groupData = {
    _id,
    service_price,
    service_name,
    service_image,
    service_description,
    email: user?.email,
    service_provider,
    image,
    service_location,

    // provider_email,
    // currentuseremail,

    // provider_name,

    // service_taking_date,

    // pecial_instruction,
    // currentusername,
  };
  // console.log(user);
  const booked = () => {
    axios
      .post(
        `https://assignment-11-server-one-plum.vercel.app/booked`,
        groupData
      )
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("success!");
          // navigate("/");
        }
      });
  };
  return (
    <div className="my-6">
      {/* img1 */}

      {/* img1 */}
      <h1 className="text-4xl text-center font-bold underline">
        Our Service{" "}
        <span className="font-bold text-green-800 underline-none">Details</span>
      </h1>
      <section className="container my-12 mx-auto  antialiased ">
        <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto group cursor-pointer transform duration-500 hover:-translate-y-1">
          <img
            className="w-full max-h-[400px] object-cover md:w-2/4"
            src={service_image}
            alt=""
          />
          <div className="">
            <div className="p-5 pb-10">
              <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                <span className="font-bold">Service_Name: </span> {service_name}
              </h1>
              <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                <span className="font-bold underline text-black">
                  {" "}
                  Descrption:
                </span>{" "}
                {service_description}
              </p>
            </div>
            <div className="bg-blue-50 p-5">
              <div className="sm:flex sm:justify-between p-5">
                <div>
                  <div className="text-lg text-gray-700">
                    <div className="text-blue-600 font-bold">
                      {" "}
                      <span className="font-bold underline">Price: </span>
                      {service_provider?.price}
                    </div>
                    <span className="text-gray-900 font-bold pr-3">
                      196 km{" "}
                    </span>{" "}
                    {service_location}
                  </div>

                  <div className="flex items-center">
                    <div className="justify-between">
                      {/* {service_provider.image} */}
                    </div>
                    <div className="flex">
                      <svg
                        className="w-4 h-4 mx-px fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                      >
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 mx-px fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                      >
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 mx-px fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                      >
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 mx-px fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                      >
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                      </svg>
                      <svg
                        className="w-4 h-4 mx-px fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                      >
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                      </svg>
                    </div>
                    <div className="text-gray-600 ml-2 text-sm md:text-base ">
                      16 reviews
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to={`/booknow/${_id}`}
                // onClick={booked}
                className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
              >
                Book Now
              </Link>
              <div className="mt-3 text-gray-600 text-sm md:text-sm">
                *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
              </div>
            </div>
          </div>
        </article>
      </section>
      <div>
        <h1 className="mb-5 text-center font-bold text-4xl">
          Affordable Service
        </h1>
        <div className="h-[450px] carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 w-1/2 pl-2">
              <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <Link to="/" className="btn btn-primary mr-5">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
