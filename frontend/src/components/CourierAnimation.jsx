import React from 'react';
import Lottie from 'react-lottie';
import pickupAnimation from '../assets/animations/Animation - 1727079877982.json'; // JSON animation file for pickup
import transitAnimation from '../assets/animations/Animation - 1727080316486.json'; // JSON animation file for transit
import deliveryAnimation from '../assets/animations/Animation - 1727080563038.json'; // JSON animation file for delivery

const CourierAnimation = () => {
  const defaultOptions = (animationData) => ({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  return (
    <div className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">2000 Courier Process</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Step 1: Parcel Pickup */}
        <div className="flex flex-col items-center">
          <Lottie options={defaultOptions(pickupAnimation)} height={200} width={200} />
          <h3 className="text-lg font-semibold mt-4">Parcel Pickup</h3>
          <p className="text-gray-500 text-center">We pick up your parcel from your location.</p>
        </div>

        {/* Step 2: In Transit */}
        <div className="flex flex-col items-center">
          <Lottie options={defaultOptions(transitAnimation)} height={200} width={200} />
          <h3 className="text-lg font-semibold mt-4">In Transit</h3>
          <p className="text-gray-500 text-center">Your parcel is on its way to the destination.</p>
        </div>

        {/* Step 3: Parcel Delivery */}
        <div className="flex flex-col items-center">
          <Lottie options={defaultOptions(deliveryAnimation)} height={200} width={200} />
          <h3 className="text-lg font-semibold mt-4">Parcel Delivery</h3>
          <p className="text-gray-500 text-center">We deliver the parcel safely to the recipient.</p>
        </div>
      </div>
    </div>
  );
};

export default CourierAnimation;
