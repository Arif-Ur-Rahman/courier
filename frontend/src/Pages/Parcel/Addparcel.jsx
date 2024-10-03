// Addparcel.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Shared/Sidebar";
import Swal from 'sweetalert2';
import { sendUserConfirmationEmail, sendAdminNotificationEmail } from './utils'; // Import email functions

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

  const handleRadioChange = (e) => {
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
      // Send POST request to add parcel
      const response = await axios.post('http://localhost:5000/api/parcels', formData);
      console.log(response);

      const parcel = response.data.parcel;
      console.log('*******', parcel._id);
      
      // Send confirmation email to user
      await sendUserConfirmationEmail(
        formData.name,
        formData.email,
        parcel._id,
        formData.phone,
        formData.address,
        formData.district,
        formData.thana,
        formData.weight,
        formData.codAmount,
        formData.exchange
      )
      .then(() => {
        console.log('User confirmation email sent successfully.');
      })
      .catch((error) => {
        console.error('Failed to send user confirmation email:', error);
        // Optionally, notify the user that email sending failed
      });

      // Send notification email to admin
      await sendAdminNotificationEmail(
        formData.name,
        formData.email,
        parcel._id,
        formData.phone,
        formData.address,
        formData.district,
        formData.thana,
        formData.weight,
        formData.codAmount,
        formData.exchange
      )
      .then(() => {
        console.log('Admin notification email sent successfully.');
      })
      .catch((error) => {
        console.error('Failed to send admin notification email:', error);
        // Optionally, notify the admin or log the error
      });

      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: 'Parcel added successfully and emails have been sent.',
        icon: 'success',
        confirmButtonText: 'Done'
      });

      // Navigate to the label/invoice page
      navigate(`/userboard/label/${parcel._id}`, { state: { parcel } });

    } catch (error) {
      console.error('Error submitting the form:', error);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Failed to add parcel. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="my-16 ml-52">
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

            {/* Phone */}
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

            {/* COD Amount */}
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

            {/* Name */}
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

            {/* Invoice */}
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

            {/* Address */}
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

            {/* Note */}
            <div>
              <label className="block text-gray-700">Note</label>
              <textarea 
                name="note" 
                value={formData.note} 
                onChange={handleChange}
                className="w-full p-2 border rounded" 
                placeholder="Type Note (max 400 chars)" />
            </div>

            {/* District */}
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

            {/* Weight */}
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

            {/* Thana */}
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

            {/* Exchange */}
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
    </div>
  );
};

export default Addparcel;
