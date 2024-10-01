import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Addparcel = () => {
  const [formData, setFormData] = useState({

    phone: '',
    name: '',
    address: '',
    district: 'Dhaka City',
    thana: '',
    codAmount: '',
    invoice: '',
    note: '',
    weight: 0,
    exchange: false,
    dtype: false
  });
  const navigate = useNavigate();
  const handleRadioChange = (e)=> {
    setFormData({
      ...formData,
      dtype: e.target.value
    });
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/parcels', formData);
      console.log(response);
      // const parcelId = response.data.parcel._id;
      const parcel = response.data.parcel;
      console.log('*******', parcel._id);
      alert('Parcel added successfully');
      navigate(`/userboard/label/${parcel._id}`, { state: { parcel } });

    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
   <div className="my-16">
    
    <h1 className="text-center font-semibold text-5xl mb-8">Please Add Your Parcel</h1>
     <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4">
     <div className="flex">
        <div className="flex items-center mr-4">
              <input 
                type="radio" 
                name="dtype" 
                value="home"
                checked={formData.dtype === 'home'} 
                onChange={handleRadioChange}
                className="mr-2" />
              <label className="text-gray-700">Home Delivery</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                name="dtype"
                value="point" 
                checked={formData.dtype === 'point'} 
                onChange={handleRadioChange}
                className="mr-2" />
              <label className="text-gray-700">Point Delivery</label>
            </div>
     </div>
          {/* .......... */}
        <div>
          <label className="block text-gray-700">Phone#</label>
          <input 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            placeholder="Type Phone Number" />
        </div>
        <div>
          <label className="block text-gray-700">COD Amount</label>
          <input 
            type="number" 
            name="codAmount" 
            value={formData.codAmount} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            placeholder="Type Cash on Delivery Amount" />
        </div>
        <div>
          <label className="block text-gray-700">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            placeholder="Type Recipient Name" />
        </div>
        <div>
          <label className="block text-gray-700">Invoice</label>
          <input 
            type="text" 
            name="invoice" 
            value={formData.invoice} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            placeholder="Type Invoice (If any)" />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            placeholder="Type Address" />
        </div>
        <div>
          <label className="block text-gray-700">Note</label>
          <textarea 
            name="note" 
            value={formData.note} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            placeholder="Type Note (max 400 chars)" />
        </div>
        <div>
          <label className="block text-gray-700">District</label>
          <input 
            type="text" 
            name="district" 
            value={formData.district} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            placeholder="Dhaka City" />
        </div>
        <div>
          <label className="block text-gray-700">Weight (KG)</label>
          <input 
            type="number" 
            name="weight" 
            value={formData.weight} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            placeholder="0" />
        </div>
        <div>
          <label className="block text-gray-700">Thana</label>
          <input 
            type="text" 
            name="thana" 
            value={formData.thana} 
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            placeholder="Type Thana" />
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            name="exchange" 
            checked={formData.exchange} 
            onChange={handleChange}
            className="mr-2" />
          <label className="text-gray-700">Exchange</label>
        </div>
      </div>
      <button type="submit" className="mt-4 w-full bg-green-500 text-white p-2 rounded">Submit</button>
    </form>

   </div>
  );
};

export default Addparcel;
