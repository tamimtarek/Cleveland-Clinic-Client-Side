// import React from 'react';

import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookedData from "../Components/BookedData";
// import { Link } from "react-router-dom";

const BookedService = () => {
  const [data, setData] = useState([]);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-one-plum.vercel.app/bookedService?email=${user?.email}`
      )
      .then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <h1>Booked service</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          {data?.length ? (
            <tbody>
              {/* row 1 */}
              {data.map((book) => (
                <BookedData key={book} book={book}></BookedData>
              ))}
            </tbody>
          ) : (
            <h1 className="text-5xl text-center">No Booking Yet!</h1>
          )}
        </table>
      </div>

      {/* <div className="overflow-x-auto">
        {/* head */}

      {/* foot */}
      {/* </div> */}
    </div>
  );
};

export default BookedService;

{
  /* <div className="container mx-auto ">
  <h1 className="text-3xl text-center mt-5 mb-5 underline font-semibold">
    <span className="text-orange-700 font-extrabold">My Art &</span> Craft ListC
  </h1>
  {touristSpot?.map((userTouristSpot, idx) => (
    <div key={userTouristSpot._id}>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */
}

// <tbody>
//   {/* row 1 */}
//   <tr>
//     <th>{idx + 1}</th>
//     <td className="w-36 ">
//       <span className="text-1xl flex font-bold"></span>{" "}
//       <span className="text-xl text-blue-400">
//         <img src={userTouristSpot.photoURL} alt="" />
//       </span>
//     </td>
//     <td className="w-36 ">
//       <span className="text-1xl flex font-bold">ItemName: </span>{" "}
//       <span className="text-xl text-blue-400">
//         {userTouristSpot.itemName}
//       </span>
//     </td>
//     <td className="w-36 ">
//       <span className="text-1xl flex font-bold">ItemName: </span>{" "}
//       <span className="text-xl text-blue-400">
//         {userTouristSpot.customization}
//       </span>
//     </td>
//     <td className="w-36 ">
//       <span className="text-1xl flex font-bold">ItemName: </span>{" "}
//       <span className="text-xl text-blue-400">
//         {userTouristSpot.stockStatus}
//       </span>
//     </td>
//     <td className="w-36">
//       <span className="font-bold text-xl text-blue-400">Email</span> :{" "}
//       {userTouristSpot.email}
//     </td>
//     <td className="w-36">
//       {" "}
//       <span className="font-bold text-xl text-blue-400">
//         Rating :{" "}
//       </span>{" "}
//       {userTouristSpot.rating}
//     </td>
//     <td className="w-36">
//       <span className="font-bold text-xl text-blue-400">Price :</span>{" "}
//       {userTouristSpot.price}
//     </td>
//     <td>
{
  /* You can open the modal using document.getElementById('ID').showModal() method */
}
{
  /* <Link to={`il/${userTouristSpot._id}`}>
                      <button className="btn btn-primary text-white w-36">
                        Details
                      </button>
                    </Link> */
}
{
  /* <Link to={`/detail/${userTouristSpot._id}`}>
                      <button className="btn btn-primary text-white w-36">
//                         Details
//                       </button>
//                     </Link> */
}
//                 <button
//                   className="mr-3 btn btn-primary"
//                   onClick={() => handelDelete(userTouristSpot._id)}
//                 >
//                   {" "}
//                   X
//                 </button>
//                 <Link to={`/update/${userTouristSpot._id}`}>
//                   <button className="btn btn-primary text-white w-36">
//                     Update
//                   </button>
//                 </Link>

//                 <br />
//               </td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   ))}
// </div>; */}
