// import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loader = useLoaderData();
  console.log(loader)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const service_name = form.get("name");
    const service_location = form.get("service_area");
    const service_image = form.get("photoUrl");
    const service_price = form.get("price");
    const customer_email = form.get("customer_email");
    const customer_name = form.get("customer_name");
    const service_description = form.get("service_description");

    const updates = {
      service_name,
      customer_email,
      customer_name,
      service_location,
      service_image,
      service_price,
      service_description,
    };
    console.log(updates);

    axios
      .put(
        `https://cleveland-server-side.vercel.app/BookedServiceUpdate?id=${loader._id}`,
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
                defaultValue={loader.service_name}
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
                defaultValue={loader.service_location}
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
                defaultValue={loader.service_price
}
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
                defaultValue={loader.customer_name}
                name="customer_name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={loader.customer_email}
                name="customer_email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <br />
          </div>

          <div className="w-full mx-auto">
            <textarea
              id="message"
              name="service_description"
              rows="4"
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
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
