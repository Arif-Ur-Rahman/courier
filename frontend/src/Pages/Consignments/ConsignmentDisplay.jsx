import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Parcel/label.css';
import Sidebar from '../Shared/Sidebar';
import Navbar from '../Shared/Navbar';
import Pagination from '../../Pagination';
import { Link } from 'react-router-dom';
 

 
 

const ConsignmentDisplay = () => {

  const [consignments, setConsignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    // Fetch data from the backend
    const fetchConsignments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/consignment');
        setConsignments(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching consignments');
        setLoading(false);
      }
    };

    fetchConsignments();
  }, []);

  // Calculate the paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = consignments.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="bg-gray-100 p-10">
          <div className="mb-8 text-start font-semibold text-xl">
            <button
              
            >
              All Consignment
            </button>
          </div>
          <div className="flex items-center gap-2 mb-4 ">
                  <Link to='/userboard/con-details'><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">All</button></Link>
                  <Link to='/adminboard/pending'><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Pending</button></Link>
                  <Link to='/userboard/approval'><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Approval Pending</button></Link>
                  <Link><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Deliverd</button></Link>
                  <Link to='/userboard/reject'><button className="bg-green-500 px-3 py-1 text-white rounded-sm font-medium">Cancelled</button></Link>
                
              </div>
          <div className="p-8 bg-white shadow-sm">
           
            <table className="min-w-full printable-label">
              <thead>
                <tr>
                  <th className="py-2 px-2 text-left border-b">Id</th>
                  <th className="py-2 px-2 text-left border-b">Invoice</th>
                  <th className="py-2 px-2 text-left border-b">Delivary Type</th>
                  {/* <th className="py-2 px-2 text-left border-b">Sender Name</th> */}
                  <th className="py-2 px-2 text-left border-b">Reciever Name</th>
                  <th className="py-2 px-2 text-left border-b">Cod Amount</th>
                  <th className="py-2 px-2 text-left border-b">Weight</th>
                  {/* <th className="py-2 px-2 text-left border-b">S.Address</th> */}
                  <th className="py-2 px-2 text-left border-b">R.Address</th>
                  <th className='py-2 px-2 text-left border-b'>Status</th>
                  <th className='py-2 px-2 text-left border-b'>Details</th>
               
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((row, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-2 px-2 text-left border-b">{row._id}</td>
                      <td className="py-2 px-2 text-left border-b">{row.invoice}</td>
                      <td className="py-2 px-2 text-left border-b">{row.dtype}</td>
                      {/* <td className="py-2 px-2 text-left border-b">{row.sname}</td> */}
                      <td className="py-2 px-2 text-left border-b">{row.rname}</td>
                      <td className="py-2 px-2 text-left border-b">{row.codAmount}</td>
                      <td className="py-2 px-2 text-left border-b">{row.weight}</td>
                      {/* <td className="py-2 px-2 text-left border-b">{row.saddress}</td> */}
                      <td className="py-2 px-2 text-left border-b">{row.raddress}</td>
                      <td className="py-2 px-2 text-left border-b">
                     <span
                     className={`px-2 py-1 rounded-lg ${
                       row.status === 'pending'
                         ? 'bg-yellow-800 text-white'
                         : row.status === 'approved'
                         ? 'bg-green-800 text-white'
                         : row.status === 'cancelled'
                         ? 'bg-red-800 text-white'
                         : ''
                     }`}
                   >
                     {row.status}
                   </span></td>
                      <td className="py-2 px-2 text-left border-b"><Link to={`/userboard/con-unique/${row._id}`}><button className="bg-blue-600 text-white px-2 py-1 rounded">Views</button></Link></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center py-4">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <Pagination
                activePage={currentPage}
                totalPages={Math.ceil(consignments.length / itemsPerPage)}
                onChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsignmentDisplay;
