import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
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
                    <ul className="menu p-4 w-80 h-full bg-black text-white space-y-2">
                        <li><a href="#users" className="text-lg">Users</a></li>
                        <li><a href="#agents" className="text-lg">Agents</a></li>
                        <li><a href="#settings" className="text-lg">Settings</a></li>
                        <li><a href="#reports" className="text-lg">Reports</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
