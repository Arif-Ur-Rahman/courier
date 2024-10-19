import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../Shared/Sidebar';
import Navbar from '../Shared/Navbar';

const CancellParcel = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/consignment?status=cancelled');
        console.log('Fetched Cancell parcels:', response);
        if (Array.isArray(response.data)) {
          setParcels(response.data);  // Ensure it's an array
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching parcels', error);
      }
    };

    fetchParcels();
  }, []);
    

  return (
    <>
        <Navbar></Navbar>
        <div className="flex">
            <Sidebar></Sidebar>
            <div className="p-8 bg-gray-100 w-screen">
                <h2 className="text-xl font-bold mb-6">Cancell Parcels</h2>
                <div className="flex items-center gap-2 mb-4 ">
                  <Link to='/userboard/con-details'><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">All</button></Link>
                  <Link to='/adminboard/pending'><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Pending</button></Link>
                  <Link to='/userboard/approval'><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Approval Pending</button></Link>
                  <Link><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Deliverd</button></Link>
                  <Link to='/userboard/reject'><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Cancelled</button></Link>
              </div>
                <div className="bg-white shadow-sm p-8">
                    <table className="min-w-full printable-label">
                    <thead>
                        <tr>
                        <th className="py-2 px-4 text-left border-b">Sender Name</th>
                        <th className="py-2 px-4 text-left border-b">Receiver Name</th>
                        <th className="py-2 px-4 text-left border-b">COD Amount</th>
                        <th className="py-2 px-4 text-left border-b">Status</th>
                        <th className="py-2 px-4 text-left border-b">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.length > 0 ? (
                        parcels.map(parcel => (
                            <tr key={parcel._id} className="border-t">
                            <td className="py-2 px-4 text-left border-b">{parcel.sname}</td>
                            <td className="py-2 px-4 text-left border-b">{parcel.rname}</td>
                            <td className="py-2 px-4 text-left border-b">{parcel.codAmount}</td>
                            <td className="py-2 px-4 text-left border-b"><span className='px-2 py-1 rounded-lg bg-red-800 text-white'>{parcel.status}</span></td>
                            <td className="py-2 px-4 text-left border-b">
                               <Link><button className="bg-blue-600 text-white  py-2 px-4 text-left border-b rounded">View</button></Link>
                            </td>
                            </tr>
                        ))
                        ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4">
                            No Cancell parcels available.
                            </td>
                        </tr>
                        )}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  
  );
};

export default CancellParcel;
