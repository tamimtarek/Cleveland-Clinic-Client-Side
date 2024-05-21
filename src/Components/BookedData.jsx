// import React from 'react';

const BookedData = ({ book }) => {
  console.log(book);
  const {
    service_name,
    service_image,
    customer_email,
    customer_name,
    currentUserEmail,
    currentUserName,
    price,
    serviceTakingDate,
    ServiceDescription,
    specialInstruction,
  } = book;
  return (
    
    <tr>
      <th></th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={service_image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">{customer_name}</div>
          </div>
        </div>
      </td>
      <td>
        {service_name}
        <span className="badge badge-ghost badge-sm">{serviceTakingDate}</span>
      </td>
      {price}
      <th>{/* <button className="btn btn-ghost btn-xs">details</button> */}</th>
    </tr>
  );
};

export default BookedData;
