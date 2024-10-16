import React from 'react';
import ASidebar from './Shared/Asidebar';
import Navbar from '../Pages/Shared/Navbar';

const Apage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:flex"> 
            <ASidebar></ASidebar>
            <div className="">
                hello.....................
            </div>
             
            </div>
        </div>
    );
};

export default Apage;