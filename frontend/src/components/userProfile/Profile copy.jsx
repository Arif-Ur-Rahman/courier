import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Pages/Shared/Navbar';
import Sidebar from '../../Pages/Shared/Sidebar';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';

const Profile = () => {
  const { user: loggedInUser, token } = useContext(AuthContext); // Renaming to loggedInUser for clarity

  // State to manage user information
  const [userInfo, setUserInfo] = useState({
    _id: '',
    username: '',
    bname: '',
    email: '',
    number: '',
    address: '',
    role: '',
    createdAt: '',
    password: '' // Simulating the current password
  });

  // Password state management
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // State to toggle between view and edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes for user information
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle input changes for passwords
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  // Save changes and switch back to view mode
  const handleSave = async () => {
    if (passwords.oldPassword && passwords.newPassword && passwords.confirmNewPassword) {
      if (passwords.oldPassword !== userInfo.password) {
        alert('Old password is incorrect!');
        return;
      }

      if (passwords.newPassword !== passwords.confirmNewPassword) {
        alert('New passwords do not match!');
        return;
      }

      // Update user password locally
      setUserInfo((prevUser) => ({
        ...prevUser,
        currentPassword: passwords.newPassword,
      }));

      // Optionally send the updated password to the server
      try {
        const response = await axios.put(
          `http://localhost:5000/api/user/update-password/${userInfo.userId}`,
          { newPassword: passwords.newPassword },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.status === 200) {
          alert('Password updated successfully!');
        } else {
          alert('Failed to update password');
        }
      } catch (error) {
        console.error('Error updating password:', error);
        alert('Error updating password');
      }
    }

    // Optionally send updated profile data to the server
    try {
      const response = await axios.put(
        `http://localhost:5000/api/user/email/${loggedInUser.email}`,
        userInfo,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }

    setIsEditing(false);
  };

  // Fetching logged-in user data from the backend API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (loggedInUser?.email) {
          const response = await axios.get(
            `http://localhost:5000/api/user/email/${loggedInUser.email}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          console.log('Fetched Logged in user Details:', response);
          if (response.data) {
            setUserInfo(response.data); // Assume the response is an object with user data
          } else {
            console.error('Unexpected response format:', response.data);
          }
        }
      } catch (error) {
        console.error('Error fetching user', error);
      }
    };
    fetchUser();
  }, [loggedInUser, token]);
  console.log('ccccxxx',userInfo);
  return (
    <>
      <Navbar />
      <div className="flex items-center">
        <Sidebar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center w-screen">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://via.placeholder.com/150" // Replace with user's profile image
                alt="User Profile"
                className="w-32 h-32 rounded-full border-4 border-indigo-500"
              />
            </div>

            {isEditing ? (
              // Edit mode form
              <>
                <h2 className="text-2xl font-semibold text-center mb-4">Edit Profile</h2>
                <div className="space-y-4">
              
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="businessName"
                    value={userInfo.bname}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Business Name"
                  />
                  
                  <input
                    type="text"
                    name="phone"
                    value={userInfo.number}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    name="address"
                    value={userInfo.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Address"
                  />
                  
                  {/* Password change fields */}
                  <input
                    type="password"
                    name="oldPassword"
                    value={passwords.oldPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Old Password"
                  />
                  <input
                    type="password"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="New Password"
                  />
                  <input
                    type="password"
                    name="confirmNewPassword"
                    value={passwords.confirmNewPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Confirm New Password"
                  />
                </div>
                <div className="mt-6 text-center">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mr-4"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              // View mode display
              <>
                <h2 className="text-2xl font-semibold text-center mb-4">{userInfo.name}</h2>
                <p className="text-gray-600 text-center mb-6">{userInfo.email}</p>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">User ID:</span>
                    <span className="text-gray-600">{userInfo._id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Business Name:</span>
                    <span className="text-gray-600">{userInfo.bname}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone:</span>
                    <span className="text-gray-600">{userInfo.number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Address:</span>
                    <span className="text-gray-600">{userInfo.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Role:</span>
                    <span className="text-gray-600">{userInfo.role}</span>
                  </div>
                  <div className="flex justify-between">
                  <span className="font-medium">Member Since:</span>
                  <span className="text-gray-600">
                    {new Date(userInfo.createdAt).toLocaleDateString()} {/* Format the date */}
                  </span>
                </div>

                </div>
                <div className="mt-6 text-center">
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
