import React, { useContext } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
// import { AuthContext } from '../../contexts/AuthContext';

const ASidebar = () => {
    // const { user, token } = useContext(AuthContext);

    // // Debugging: log the user and token values
    // console.log('User:', user); 
    // console.log('Token:', token); 

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
                        <li><a href="/adminboard/adminpage" className="text-lg">Dashboard</a></li>
                        <li><a href="/adminboard/user-display" className="text-lg">User Handle</a></li>
                        <li><a href="/adminboard/pending" className="text-lg">Pending Parcels</a></li>
 

                  
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ASidebar;
