// import React from 'react';

import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import { Link } from "react-router-dom";
import { useState } from "react";
import ManageCard from "../Components/ManageCard";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [manageService, setManageService] = useState([]);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    fetch(
      `https://assignment-11-server-one-plum.vercel.app/manageService?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setManageService(data));
  }, [clear]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-600 text-center my-5">
        Manage Service
      </h1>
      {/* map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manageService.map((service) => (
          <ManageCard
            key={service._id}
            clear={clear}
            setClear={setClear}
            service={service}
          ></ManageCard>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
