// import React from 'react';

import { getAuth } from "firebase/auth";
import { useContext, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleChange = (event) => {
  //   setCustomer(event.target.value);
  //   console.log(event);
  // };

  // console.log(customer);

  const handleAddItem = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const service_name = form.get("name");
    const service_location = form.get("service_area");
    // const service_email= form.get
    const service_price = form.get("price");
    const service_image = form.get("photoUrl");
    const service_description = form.get("description");

    // const  = getAuth();

    const allInput = {
      service_name,
      service_location,
      service_price,
      service_image,
      //  service_provider,
      service_description,
      customer_name: user.displayName,
      customer_email: user.email,
      customer_photo: user.photoURL,
    };

    console.log({ allInput });
    fetch("https://assignment-11-server-one-plum.vercel.app/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allInput),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success(" successful");
          navigate("/service");
        }
        // e.target.reset();
      });
  };

  return (
    <div className=" w-full shadow-2xl bg-base-100">
      <form onSubmit={handleAddItem} className="card-body">
        <div className="lg:flex w-full gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="ServiceName"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <input
              type="text"
              placeholder="subcategory_Name"
              name="service_area"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="lg:flex w-full gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              name="photoUrl"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="w-full mx-auto">
          <textarea
            id="message"
            name="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-neutral btn-primary">Create</button>
        </div>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default AddService;
