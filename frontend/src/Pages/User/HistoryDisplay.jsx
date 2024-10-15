import React from 'react';
import Sidebar from '../Shared/Sidebar';
import Navbar from '../Shared/Navbar';

const HistoryDisplay = () => {
    return (
        <> 
            <Navbar></Navbar>
            <div className="flex">
                <Sidebar></Sidebar>
                <div>
                    <h1>holol</h1>
                </div>
            </div>
        </>
        );
};

export default HistoryDisplay;