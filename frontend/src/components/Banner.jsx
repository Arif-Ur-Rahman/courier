import React from "react";
import Image from "../../src/assets/2000courierHero.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="font-bold text-4xl">
              <span className="text-green-500"> 2000 Courier </span>
              is Your trusted partner in every journey. Delivering your parcels
              with speed and reliability.
            </h1>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Enter Your Parcel ID to Track Parcel" />
            </label>
          </div>
          <button className="mt-6 btn btn-secondary bg-green-500 text-white hover:bg-slate-800 duration-300 cursor-pointer font-bold">Track Your Parcel</button>
        </div>

        <div className="w-full md:w-1/2 order-1 flex justify-center items-center">
          <img src={Image} className="w-full h-auto max-w-sm mt-12 md:mt-32" alt="2000 Courier Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;
