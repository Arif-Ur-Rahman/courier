import React, { useState, useEffect } from "react";
import axios from "axios";
import './inputform.css';

const PricingCal = () => {
  const [from, setFrom] = useState("Dhaka City");
  const [destination, setDestination] = useState("Dhaka City");
  const [category, setCategory] = useState("Regular");
  const [serviceType, setServiceType] = useState("Regular");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState(0);

  // Auto-calculate price when weight changes
  useEffect(() => {
    if (weight) {
      handleCalculate();
    }
  }, [weight]);

  const handleCalculate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/pricing-cal", {
        weight: parseFloat(weight),
      });
      setPrice(response.data.price);
    } catch (error) {
      console.error("Error calculating price", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">Calculate Your Delivery Charge</h1>
      <p className="text-center mb-4">You can easily calculate your delivery charge here</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>From</label>
          <input type="text" value={from} disabled className="input-field" />
        </div>
        <div>
          <label>Destination</label>
          <input type="text" value={destination} disabled className="input-field" />
        </div>
        <div>
          <label>Category</label>
          <input type="text" value={category} disabled className="input-field" />
        </div>
        <div>
          <label>Service Type</label>
          <input type="text" value={serviceType} disabled className="input-field" />
        </div>
        <div>
          <label>Weight (KG)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="input-field"
            placeholder="Enter weight"
          />
        </div>
      </div>
      <div className="text-center my-4">
        <p className="text-2xl font-bold">{price} TK</p>
      </div>
    </div>
  );
};

export default PricingCal;
