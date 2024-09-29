import React from 'react';
import { FcClock, FcBearish, FcCustomerSupport, FcGlobe } from "react-icons/fc";
import { DiAptana } from "react-icons/di";
import { FiSend } from "react-icons/fi";

const Menu = () => {
    return (
        <div className='lg:w-3/4 mt-10 space-y-3 mx-auto lg:mr-0'>
           <div className="flex items-center justify-center space-x-2 lg:space-x-4">
           <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <FcClock style={{ fontSize: '56px' }} />
            </button>
            <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <FiSend style={{ fontSize: '56px' }} />
            </button>
            <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <FcBearish style={{ fontSize: '56px' }} />
            </button>
           </div>
         <div className=" flex items-center justify-center space-x-2 lg:space-x-4">
          <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <FcCustomerSupport style={{ fontSize: '56px' }} />
            </button>
            <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <FcGlobe style={{ fontSize: '56px' }} />
            </button>
            <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <DiAptana style={{ fontSize: '56px' }} />
            </button>
         </div>
        </div>
    );
};

export default Menu;
