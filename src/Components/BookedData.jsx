// import React from 'react';

const BookedData = ({ book }) => {
  const {
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
  } = book;
  return (
    // <div className="w-20 h-auto">
    //   <tbody>
    //     {/* row 1 */}
    //     <tr>
    //       <th></th>
    //       <td>
    //         <div className="flex items-center gap-3">
    //           <div className="avatar">
    //             <div className="mask mask-squircle w-12 h-12">
    //               <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
    //             </div>
    //           </div>
    //           <div>
    //             <div className="font-bold">{serviceName}</div>
    //             <div className="text-sm opacity-50">{providerName}</div>
    //           </div>
    //         </div>
    //       </td>
    //       <td>
    //         {serviceTakingDate}
    //         <br />
    //         <span className="badge badge-ghost badge-sm">
    //           {currentUserEmail}
    //         </span>
    //       </td>
    //       <td>{price}</td>
    //       <td>
    //         {/* <details className="dropdown">
    //           <summary className="my-auto">{status || "Pending"} </summary>
    //           <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    //             <li>
    //               <button onClick={() => updateStatus(_id, "Pending")}>
    //                 Pending
    //               </button>
    //             </li>

    //             <li>
    //               <button onClick={() => updateStatus(_id, "Working")}>
    //                 Working
    //               </button>
    //             </li>

    //             <li>
    //               <button onClick={() => updateStatus(_id, "Complete")}>
    //                 Complete
    //               </button>
    //             </li>
    //           </ul>
    //         </details> */}
    //       </td>
    //     </tr>
    //   </tbody>

    //   {/* <tr>
    //     <td className="w-20 h-auto">
    //       <div className="flex w-full justify-center items-center gap-3">
    //         <div className="avatar">
    //           <div className="mask mask-squircle w-12 h-12">
    //             <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
    //           </div>
    //         </div>
    //         <div>
    //           <div className="font-bold">{providerName}</div>
    //         </div>
    //       </div>
    //     </td>
    //     <td className="w-20 h-auto">{price}</td>
    //     <td className="w-20 h-auto">{serviceName}</td>
    //     <td>
    //       <button className="btn btn-ghost btn-xs">details</button>
    //     </td>
    //   </tr> */}
    // </div>
    <tr>
      <th></th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">{providerName}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <span className="badge badge-ghost badge-sm">{serviceTakingDate}</span>
      </td>
      {price}
      <th>{/* <button className="btn btn-ghost btn-xs">details</button> */}</th>
    </tr>
  );
};

export default BookedData;
