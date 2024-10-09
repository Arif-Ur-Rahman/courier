import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import Navbar from "../Shared/Navbar";

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
    <>
      <Navbar></Navbar>
      <div className="flex ">
        <Sidebar></Sidebar>
        <div className="bg-gray-100  w-screen p-10">
            <div className="mb-8 text-start font-semibold text-xl"></div>
               
              <div className=" p-6 bg-white shadow-sm ">
               
              <div className="flex items-center gap-2 mb-4 ">
                  <button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Open Support Ticket</button>
                  <button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Invoice</button>
                  <button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Level</button>
                  <Link to={`/userboard/updateparcel/${id}`}><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Edit</button></Link>
              </div>
               <div className="border p-6 ">
                <div className="flex justify-between items-start">
                  <div className="text-gray-500">
                    <p className="text-gray-500">{new Date(parcelData.createdAt).toLocaleString()}</p>
                    <p>Id: {parcelData._id}</p>
                    <p>Invoice: {parcelData.invoice}</p>
                    <p>Tracking Code: {parcelData.trackingCode}</p>
                    <p>Tracking Link: 
                      <a href={parcelData.trackingLink} className="text-blue-500">
                        {parcelData.trackingLink}
                      </a>
                    </p>
                  </div>
                  <div className="text-">
                    <p className="text-gray-500">Created at: {new Date(parcelData.createdAt).toLocaleString()}</p>
                    <p className="text-gray-500">Approved at: {parcelData.approvedAt || "Not Yet"}</p>
                    <p><span className="text-gray-500">Weight:</span> {parcelData.weight || "KG"}</p>
                    <p className="font-bold text-lg">COD: ৳ {parcelData.codAmount}</p>
                    <p className="text-red-500">{parcelData.status}</p>
                    <div className="mt-4 flex space-x-4">
                  <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                  <p className="text-gray-500">{parcelData.status}</p>
                </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p><span className="font-semibold">Name:</span> {parcelData.rname}</p>
                  <p><span className="font-semibold">Address: </span>{parcelData.raddress}</p>
                  <p>
                    <span className="font-semibold">Phone Number:</span>{parcelData.rphone}
                    <a href={`tel:${parcelData.rphone}`} className="ml-2 text-white px-2 py-1 rounded-md border-0 bg-blue-500">Call</a>
                  </p>
                </div>
               </div>

                
              </div>
        </div>  
        
      </div>
    </>
  );
};

export default ConDetails;
