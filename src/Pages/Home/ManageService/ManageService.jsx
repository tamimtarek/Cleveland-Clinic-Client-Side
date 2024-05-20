import { useContext, useEffect } from "react";

// import { Link } from "react-router-dom";
import { useState } from "react";

import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ManageCard from "../ManageCard/ManageCard";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [manageService, setManageService] = useState([]);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    fetch(
      `http://localhost:5000/manageservice/${user?.email == user.email}`
    )
      .then((res) => res.json())
      .then((data) => setManageService(data));
  }, [user]);
console.log(manageService);
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