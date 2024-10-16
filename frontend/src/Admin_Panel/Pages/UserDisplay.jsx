import React, { useEffect } from 'react';
import Navbar from '../../Pages/Shared/Navbar';
import ASidebar from '../Shared/Asidebar';
import { useState } from 'react';
 

const UserDisplay = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetching user from backend.......
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user');
                setUsers(response.data);
                setLoading(false);

            } catch (err) {
                setError('Error fetching Users');
                setLoading(false);
            }
            
        };
        fetchUser();
    }, []);
    // ......
    if (loading) {
        return <div>Loading data....</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div>
             <Navbar></Navbar>
             <div className="flex">
                <ASidebar></ASidebar>
                <div className="bg-gray-100 p-10 w-screen">
                    <div className="mb-8 text-start font-semibold text-xl">
                        <button>All User</button>
                    </div>
                    <div className="p-8 bg-white shadow-sm">
                        <table className='min-w-full printable-label'>
                            <thead>
                                <tr>
                                    <th className='py-2'>Name</th>
                                    <th className='py-2'>Email</th>
                                    <th className='py-2'>Role</th>
                                    <th className='py-2'>Action</th>
                                    <th className='py-2'>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                

             </div>
            
        </div>
    );
};

export default UserDisplay;