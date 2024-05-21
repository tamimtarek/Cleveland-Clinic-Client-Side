import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CardDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();
  const serviceDetails = allData.find((data) => data._id === id);
  console.log(serviceDetails);
  const {
    serviceName,
    serviceArea,
    description,
    serviceImage,
    email,
    price,
    _id,
    providerImage,
    providerName,
  } = serviceDetails;

  // const loader = useLoaderData();
  // console.log(loader);
  const navigate = useNavigate();

  const handleItem = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const data = {
      serviceName: serviceName,
      serviceImage: serviceImage,
      providerEmail: email,
      providerName: providerName,
      // currentUserEmail: loader.currentuseremail,
      // currentUserName: loader.currentusername,
      price: price,
      serviceTakingDate: form.get("serviceTakingDate"),
      ServiceDescription: description,
      specialInstruction: form.get("specialInstruction"),
      status: "Pending",
    };
    console.log(data);

    fetch("https://localhost:5000/booked", {
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
    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90">
      <a href="#" className="block w-full h-full">
        <img
          alt="blog photo"
          src={serviceImage}
          className="object-cover w-full h-[560px]"
        />
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-indigo-500 text-md">{serviceArea}</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            {serviceName}
          </p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
            {description}
          </p>
          <div className="pt-5 pb-5">
            {/* <Link
              to={`/booknow/${_id}`}
              // onClick={booked}
              className="btn btn-primary"
            >
              
            </Link> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Book Now
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">{serviceName}</h3>
                <p className="py-4"></p>
                <div className="modal-action">
                  <form onSubmit={handleItem} method="dialog" className="card-body text-center">
                    <div className="lg:flex w-full gap-5">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Service Name</span>
                        </label>
                        <input
                          value={serviceName}
                          placeholder={serviceName}
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
                          <img
                            className="w-20 h-20"
                            src={serviceImage}
                            alt=""
                          />
                          <p>{serviceName}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:flex w-full gap-5">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text"> Provider Email : </span>
                        </label>
                        <input
                          value={email}
                          placeholder={email}
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
                          value={providerName}
                          placeholder={providerName}
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
                          <span className="label-text">
                            current UserEmail :{" "}
                          </span>
                        </label>
                        <input
                          // value={currentuseremail}
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
                          // value={currentusername}
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
                          value={price}
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
                        value={description}
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

                    <div className="form-control modal-action mt-6">
                      <Link to={`/booknow/${_id}`} className="btn btn-neutral btn-primary">
                        Purchase
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div className="flex items-center mt-4">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src={providerImage}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">{providerName}</p>
              <p className="text-gray-400 dark:text-gray-300">{email}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardDetails;
