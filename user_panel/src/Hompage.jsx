import React from 'react';
import Sidebar from './Pages/Shared/Sidebar';
import Navbar from './Pages/Shared/Navbar';
import Menu from './Pages/Mainpage/Menu';

const Hompage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:flex"> 
            <Sidebar></Sidebar>
            <Menu></Menu>
            </div>
     
        </div>
    );
};

export default Hompage;