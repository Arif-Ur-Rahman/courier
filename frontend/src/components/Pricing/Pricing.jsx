// PricingPage.jsx
import React from 'react';
import PricingCalculator from './PriceCalc';
import CoverageMap from './CoverageMap';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Pricing = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto my-10 p-4">
      <h2 className="text-2xl font-bold mb-6">Calculate Your Parcel Cost</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Pricing Calculator Component */}
        <div className="w-full lg:w-1/2">
          <PricingCalculator />
        </div>

        {/* Map Component */}
        <div className="w-full lg:w-1/2">
          <CoverageMap />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Pricing;
