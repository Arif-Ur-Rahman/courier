import React from 'react';
import Barcode from 'react-barcode';
import QRCode from 'react-qr-code'; // Use react-qr-code

const Label = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 h-screen">
      {/* Parcel Header */}
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Parcel ID# 100894292</h2>
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Invoice</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Label</button>
        </div>
      </div>

      {/* Label Container */}
      <div className="flex items-start bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        {/* Left: Parcel Info */}
        <div className="border p-4 w-1/3">
          <div className="flex justify-center mb-2">
            <img src="/logo.png" alt="Logo" className="h-12" /> {/* Replace with actual logo */}
          </div>
          <p className="text-sm text-center font-semibold">website maker</p>
          <p className="text-xs text-center">ID: 1212847</p>

          {/* Barcode */}
          <div className="my-4 flex justify-center">
            <Barcode value="100894292" />
          </div>

          {/* QR Code */}
          <div className="my-4 flex justify-center">
            <QRCode value="Parcel: 100894292" size={80} />
          </div>

          {/* Parcel Details */}
          <div className="text-sm">
            <p>ID: <strong>100894292</strong></p>
            <p>D. Type: Home</p>
            <p>WGT: 1 KG</p>

            <div className="mt-4">
              <p>Name: <strong>Tahsif</strong></p>
              <p>Phone: <strong>01610273172</strong></p>
              <p>Address: <strong>Dhaka</strong></p>
            </div>
            <div className="mt-4">
              <p>COD: <strong>20</strong></p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs mt-4">
            <p>P: 30/09/24 03:53pm</p>
            <p>SteadFast Courier</p>
            <p>www.steadfast.com.bd</p>
          </div>
        </div>

        {/* Right: Print Button */}
        <div className="w-2/3 flex justify-center items-start">
          <button className="bg-green-500 text-white px-6 py-3 rounded">Print</button>
        </div>
      </div>
    </div>
  );
};

export default Label;
 