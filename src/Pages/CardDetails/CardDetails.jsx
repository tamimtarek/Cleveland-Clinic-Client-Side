import { Link, useLoaderData, useParams } from "react-router-dom";

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
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Book Now
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{serviceName}</h3>
                <p className="py-4">
                  
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
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
