import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookedData from "../BookedData/BookedData";


const BookedService = () => {
    const [data, setData] = useState([]);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(
        `https://localhost:5000/bookedService?email=${user?.email}`
      )
      .then((res) => setData(res.data));
  }, [user]);
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