// import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const names = form.get("name");
    const area = form.get("service_area");
    const photo = form.get("photoUrl");
    const price = form.get("price");
    const email = form.get("email");
    const usernames = form.get("username");
    const descriptions = form.get("description");

    const updates = {
      names,
      email,
      usernames,
      area,
      photo,
      price,
      descriptions,
    };
    console.log(updates);

    axios
      .put(
        `https://assignment-11-server-one-plum.vercel.app/BookedServiceUpdate?id=${id}`,
        updates
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="w-full shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
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
            <br />
          </div>

          <div className="lg:flex w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name..."
                name="username"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="user email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <br />
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
            <button type="submit" className="btn btn-neutral btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
