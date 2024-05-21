import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";


const UpdateService = () => {
    const { user } = useContext(AuthContext);
    const allData = useLoaderData();
  const { id } = useParams();
  const serviceDetails = allData.find((data) => data._id === id);
  console.log(serviceDetails);

  const handleUpdate = (e) => {

    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const serviceName = form.get("name");
    const serviceImage = form.get("photo");
    const price = form.get("price");
    const area = form.get("area");
    const description = form.get("description");
    
    const allInput = {
      serviceName,
      serviceImage,
      area,
      price,
      description,

    };
    e.target.reset();
    console.log(allInput);
    fetch("http://localhost:5000/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allInput),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Success");
      });
  };

  return (
    <div className="flex justify-center bg-base-200 p-10">
      <div className="flex flex-col w-full max-w-2xl px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light sm:text-2xl ">
          Update Your Service
        </div>
        <div className="mt-8">
          <form onSubmit={handleUpdate}>
            <div className="flex flex-col mb-2">
              <div className="flex">
                <input
                  type="text"
                  name="name"
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  defaultValue={serviceDetails.serviceName}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex ">
                <input
                  type="text"
                  name="photo"
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Service image"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex w-1/2 flex-col mb-2">
                <div className="flex">
                  <input
                    type="text"
                    name="price"
                    defaultValue={serviceDetails.price}
                    className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-col mb-6">
                <div className="flex ">
                  <input
                    type="text"
                    name="area"
                    defaultValue={serviceDetails.area}
                    className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Service Area"
                  />
                </div>
              </div>
            </div>

            <label className="text-gray-700">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Description"
                name="description"
                rows="3"
                cols="40"
              ></textarea>
            </label>

            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4 btn bg-purple-600 hover:bg-purple-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md "
              >
                Update Service
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            <span className="ml-2">You don&#x27;t have an account?</span>
          </a>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateService;