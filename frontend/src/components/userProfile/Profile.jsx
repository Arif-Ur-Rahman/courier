import React, { useState } from 'react';
import Navbar from '../../Pages/Shared/Navbar';
import Sidebar from '../../Pages/Shared/Sidebar';

function Profile() {
  // State to manage user information
  const [user, setUser] = useState({
    userId: 'U12345',
    name: 'John Doe',
    businessName: 'Doe Enterprises',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main St, City, Country',
    role: 'Business Owner',
    memberSince: 'January 2023',
    currentPassword: 'password123' // Simulating the current password
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
    setUser((prevUser) => ({
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
  const handleSave = () => {
    if (passwords.oldPassword && passwords.newPassword && passwords.confirmNewPassword) {
      if (passwords.oldPassword !== user.currentPassword) {
        alert('Old password is incorrect!');
        return;
      }

      if (passwords.newPassword !== passwords.confirmNewPassword) {
        alert('New passwords do not match!');
        return;
      }

      // Update user password
      setUser((prevUser) => ({
        ...prevUser,
        currentPassword: passwords.newPassword,
      }));
      alert('Password updated successfully!');
    }

    setIsEditing(false);
    // Here, you can add functionality to save changes to a server or local storage
  };

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
                    name="userId"
                    value={user.userId}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="User ID"
                    disabled // User ID is non-editable
                  />
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="businessName"
                    value={user.businessName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Business Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Email"
                    disabled // Email is non-editable
                  />
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Address"
                  />
                  <input
                    type="text"
                    name="role"
                    value={user.role}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Role"
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
                <h2 className="text-2xl font-semibold text-center mb-4">{user.name}</h2>
                <p className="text-gray-600 text-center mb-6">{user.email}</p>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">User ID:</span>
                    <span className="text-gray-600">{user.userId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Business Name:</span>
                    <span className="text-gray-600">{user.businessName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone:</span>
                    <span className="text-gray-600">{user.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Address:</span>
                    <span className="text-gray-600">{user.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Role:</span>
                    <span className="text-gray-600">{user.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Member Since:</span>
                    <span className="text-gray-600">{user.memberSince}</span>
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
}

export default Profile;
