import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const Servicetodo = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Function to filter data based on completion status
  const filterServices = (completedStatus) => {
    if (!data.length) return [];

    // Filter data based on the provided status
    const filtered = data.filter(
      (service) => service.completed === completedStatus
    );
    setFilteredData(filtered); // Update state with filtered data
  };

  useEffect(() => {
    fetch("https://assignment-11-server-one-plum.vercel.app/bookedService")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // Example usage of filterServices
  // This could be triggered by a button click or any other event
  const handleFilterClick = () => {
    filterServices(true); // Show only completed services
  };

  const updateStatus = (id, status) => {
    console.log(id, status);
    fetch("https://assignment-11-server-one-plum.vercel.app/bookstatusupdate", {
      method: "PUT",
      body: JSON.stringify({ id, status }),
      headers: { "content-type": "application/json" },
    }).then((res) => console.log(res));
    setData(
      data?.map((i) => {
        if (i._id === id) {
          return { ...i, status };
        }
        return i;
      })
    );
  };

  return (
    <div>
      <h1 className="text-center  text-3xl my-5  font-bold">Service to Do</h1>
      {/* Render filtered data */}
      {filteredData.map((service, index) => (
        <div key={index}>
          <h2>{}</h2>
          <p>Status: {service.status}</p>
        </div>
      ))}
      {/* Button to trigger filter */}
      <button onClick={handleFilterClick}>Show Completed Services</button>
      {/* design */}
      {data.map(
        ({
          _id,
          serviceName,
          serviceImage,
          providerEmail,
          providerName,
          currentUserEmail,
          currentUserName,
          price,
          serviceTakingDate,
          ServiceDescription,
          specialInstruction,
          status,
        }) => (
          <div className="" key={_id}>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>photo</th>
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={serviceImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{providerName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {serviceTakingDate}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {currentUserEmail}
                    </span>
                  </td>
                  <td>{price}</td>
                  <td>
                    <details className="dropdown">
                      <summary className="my-auto">
                        {status || "Pending"}{" "}
                      </summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>
                          <button onClick={() => updateStatus(_id, "Pending")}>
                            Pending
                          </button>
                        </li>

                        <li>
                          <button onClick={() => updateStatus(_id, "Working")}>
                            Working
                          </button>
                        </li>

                        <li>
                          <button onClick={() => updateStatus(_id, "Complete")}>
                            Complete
                          </button>
                        </li>
                      </ul>
                    </details>
                  </td>
                </tr>
              </tbody>
              {/* foot */}
              <tfoot></tfoot>
            </table>
          </div>
        )
      )}
    </div>
  );
};

export default Servicetodo;
