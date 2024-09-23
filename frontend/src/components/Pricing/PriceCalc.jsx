import React, { useState } from 'react';

const cities = [
  'Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh'
];

const PricingCalc = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    if (!fromCity || !toCity || !weight) {
      alert('Please fill all fields!');
      return;
    }

    let parcelWeight = parseFloat(weight);
    if (isNaN(parcelWeight) || parcelWeight <= 0) {
      alert('Please enter a valid weight.');
      return;
    }

    if (fromCity === toCity) {
      setPrice(parcelWeight < 1 ? 50 : 110);
    } else {
      setPrice(parcelWeight < 1 ? 100 : 140);
    }
  };

  return (
    <>
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Parcel Pricing Calculator</h2>
        
        {/* From City */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">From City:</label>
          <select 
            className="w-full px-4 py-2 border rounded-lg"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
        
        {/* To City */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">To City:</label>
          <select 
            className="w-full px-4 py-2 border rounded-lg"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Parcel Weight */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Weight (kg):</label>
          <input 
            type="number" 
            min="0" 
            step="0.01"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter parcel weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Calculate Button */}
        <button 
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={calculatePrice}
        >
          Calculate Price
        </button>

        {/* Display Price */}
        {price !== null && (
          <div className="mt-4 p-4 text-center bg-green-100 rounded-lg">
            <h3 className="text-xl font-bold">Estimated Price: {price} Taka</h3>
          </div>
        )}
      </div>
    </div>
    
    </>
  );
};

export default PricingCalc;
