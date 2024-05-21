import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const BookNow = () => {
  const loader = useLoaderData();
  console.log(loader);
  const navigate = useNavigate();

  const handleItem = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const data = {
      serviceName: loader.service_name,
      serviceImage: loader.service_image,
      providerEmail: loader.provider_email,
      providerName: loader.provider_email,
      currentUserEmail: loader.currentuseremail,
      currentUserName: loader.currentusername,
      price: loader.service_price,
      serviceTakingDate: form.get("serviceTakingDate"),
      ServiceDescription: loader.service_description,
      specialInstruction: form.get("specialInstruction"),
      status: "Pending",
    };
    console.log(data);

    fetch("https://assignment-11-server-one-plum.vercel.app/booked", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
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
    <div>
      <h1></h1>
      {/* form */}
      <div className=" w-full shadow-2xl bg-base-100">
        <form onSubmit={handleItem} className="card-body text-center">
          <div className="lg:flex w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                value={loader.service_name}
                type="text"
                contentEditable={false}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="w-full flex gap-4">
              <label className="label">
                <span className="label-text">Service Image :</span>
              </label>
              <div>
                <img className="w-20 h-20" src={loader.service_image} alt="" />
                <p>{loader.service_image}</p>
              </div>
            </div>
          </div>

          <div className="lg:flex w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text"> Provider Email : </span>
              </label>
              <input
                value={loader.provider_email}
                type="text"
                contentEditable={false}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Provider Name : </span>
              </label>
              <input
                value={loader.provider_name}
                type="text"
                contentEditable={false}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="lg:flex w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">current UserEmail : </span>
              </label>
              <input
                value={loader.currentuseremail}
                type="text"
                contentEditable={false}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">current UserName: </span>
              </label>
              <input
                value={loader.currentusername}
                type="text"
                contentEditable={false}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price : </span>
              </label>
              <input
                value={loader.service_price}
                type="text"
                contentEditable={false}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Service Description</span>
            </label>
            <input
              value={loader.service_description}
              type="text"
              contentEditable={false}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-[500px] mx-auto">
            <label className="label">
              <span className="label-text">Service Taking Date </span>
            </label>
            <input
              type="date"
              name="serviceTakingDate"
              contentEditable={false}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/*  */}

          <div className="w-full mx-auto">
            <label className="label">
              <span className="label-text">Special instruction</span>
            </label>
            <textarea
              id="message"
              name="specialInstruction"
              // value={loader.}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Special instruction"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral btn-primary">Purchase</button>
          </div>
        </form>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default BookNow;
