import React, { useContext } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { AuthContext } from '../../contexts/AuthContext';

const Sidebar = () => {
    const { user, token } = useContext(AuthContext);

    // Debugging: log the user and token values
    console.log('User:', user); 
    console.log('Token:', token); 

    return (
        <div className="flex">
            {/* Sidebar for desktop and hidden on mobile */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Hamburger for mobile */}
                    <label htmlFor="my-drawer" className="btn border-0 drawer-button lg:hidden fixed top-4 left-4 z-50">
                        <RxHamburgerMenu size={24} />
                    </label>
                </div>

                {/* Sidebar content */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 h-full bg-black text-white space-y-2">
                        <li><a href="/userboard/userpage" className="text-lg">Dashboard</a></li>
                        <li><a href="/userboard/addparcel" className="text-lg">Add parcel</a></li>
                        <li><a href="/userboard/con-details" className="text-lg">Consignments</a></li>
                        <li><a href="#reports" className="text-lg">Fraud check</a></li>
                        <li><a href="#reports" className="text-lg">Pickup Request</a></li>
                        <li><a href="/userboard/price" className="text-lg">Pricing</a></li>
                        <li><a href="/userboard/fileup" className="text-lg">Bulk Print</a></li>
                        <li><a href="#reports" className="text-lg">Modarator</a></li>

                        {/* Conditionally render User History link */}
                        {user ? (
                            <li><a href={`/userboard/user-history/${user.email}`} className="text-lg">User History</a></li>
                        ) : (
                            <li><span className="text-lg text-gray-400">Login required for User History</span></li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
