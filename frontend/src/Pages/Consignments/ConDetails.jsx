import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ConDetails = () => {
  const { id } = useParams(); //
  const [parcelData, setParcelData] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    axios.get(`http://localhost:5000/api/consignment/${id}`)
      .then(response => {
        setParcelData(response.data);
      })
      .catch(error => {
        console.error("Error fetching parcel data:", error);
      });
  }, []);

  if (!parcelData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500">{new Date(parcelData.createdAt).toLocaleString()}</p>
          <p>Id: {parcelData._id}</p>
          <p>Invoice: {parcelData.invoice}</p>
          {/* <p>Tracking Code: {parcelData.trackingCode}</p> */}
          <p>Tracking Link: 
            {/* <a href={parcelData.trackingLink} className="text-blue-500">
              {parcelData.trackingLink}
            </a> */}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Created at: {new Date(parcelData.createdAt).toLocaleString()}</p>
          {/* <p>Approved at: {parcelData.approvedAt || "Not Yet"}</p> */}
          <p>Weight: {parcelData.weight || "KG"}</p>
          <p className="font-bold text-lg">COD: ৳ {parcelData.codAmount}</p>
          {/* <p className="text-red-500">{parcelData.status}</p> */}
        </div>
      </div>

      {/* <div className="mt-4">
        <p>Name: {parcelData.customer.name}</p>
        <p>Address: {parcelData.customer.address}</p>
        <p>
          Phone Number: {parcelData.customer.phone} 
          <a href={`tel:${parcelData.customer.phone}`} className="ml-2 text-blue-500 underline">Call</a>
        </p>
      </div>

      <div className="mt-4 flex space-x-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        <p className="text-gray-500">{parcelData.status}</p>
      </div> */}
    </div>
  );
};

export default ConDetails;
