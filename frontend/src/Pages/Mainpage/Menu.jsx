import React from 'react';
import { MdAddToPhotos } from "react-icons/md";
import { FaTruckPickup } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiEntryDoor } from "react-icons/gi";
import { FcOnlineSupport } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='lg:w-3/4 mt-10 space-y-3 mx-auto lg:mr-0'>
           <div className="flex items-center justify-center space-x-2 lg:space-x-4">
           <Link to="/userboard/addparcel">
           <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <MdAddToPhotos style={{ fontSize: '56px' }} />
                <h3>Add Percel</h3>
            </button>
           </Link>
            <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <FaTruckPickup style={{ fontSize: '56px' }} />
                <h3>Pickup Request</h3>
            </button>
            <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <FaLocationDot style={{ fontSize: '56px' }} />
                <h3>Pick & Drop</h3>
            </button>
           </div>
         <div className=" flex items-center justify-center space-x-2 lg:space-x-4">
          {/* <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <RiSecurePaymentLine style={{ fontSize: '56px' }} />
                <h3>Payment Request</h3>
            </button> */}
            <Link to="/userboard/price"><button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <RiSecurePaymentLine style={{ fontSize: '56px' }} />
                <h3>Pricing</h3>
            </button></Link>
            <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <GiEntryDoor style={{ fontSize: '56px' }} />
                <h3>Latest Entries</h3>
            </button>
            <button className="btn h-16 lg:h-32 w-16 lg:w-60 border rounded-lg bg-[#3498db] flex items-center justify-center">
                <FcOnlineSupport style={{ fontSize: '56px' }} />
                <h3>Support</h3>
            </button>
         </div>
        </div>
    );
};

export default Menu;
