// import React from 'react';
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { set } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ManageCard = ({ service, setClear, clear }) => {
  const navigate = useNavigate();

  const {
    _id,
    service_image,
    service_name,
    service_description,
    customer_photo,
    service_price,
    customer_name,
    customer_email,
  } = service;
  console.log(_id);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(
          `https://assignment-11-server-one-plum.vercel.app/deleteService/${_id}`
        );
        Navigate("/service").then((res) => {
          if (res.data.deletedCount > 0) {
            // uiUpadte();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            setClear(!clear);
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gray-100  ">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg h-auto w-full">
          <img
            src={service_image}
            alt="Mountain"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              <span className="font-bold underline">Service Name: </span>{" "}
              {service_name}
            </h2>
            <p className="text-gray-700 leading-tight mb-4">
              <span className="font-bold underline">Service-Description:</span>{" "}
              {service_description}{" "}
            </p>
            <p className="text-gray-700 leading-tight h-auto text-sm mb-4">
              <span className="font-bold te underline">User-Email : </span>
              {customer_email}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={customer_photo}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span className="mr-4 text-gray-800 font-semibold">
                  <span className="font-bold text-black">Name: </span>{" "}
                  {customer_name}
                </span>
              </div>
              <span className="text-gray-600">
                <span className="font-bold text-black ">Service_PRice:</span>{" "}
                {service_price}
              </span>
            </div>
            {/* btn */}
            <button
              onClick={handleDelete}
              className="mr-3 relative mt-7 inline-flex items-center px-12 py-3 overflow-hidden text-lg w -full font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative bg-rose-600">X</span>
            </button>
            <Link to={`/update/${_id}`}>
              <button className="relative mt-7 inline-flex items-center px-12 py-3 overflow-hidden text-lg w -full font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="relative">Update</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCard;
