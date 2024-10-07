import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import axios from 'axios';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryStr = event.target.result;
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(worksheet);
        setData(sheetData);
        console.log(sheetData); 
        // Send data to backend API
        axios.post('http://localhost:5000/api/consignment',sheetData)
        .then((response) => {
          console.log('consignment data uploaded succesfully', response.data);
          navigate('/userboard/imported', { state: { sheetData } });
        })
        .catch((error) => {
          console.error('Error uploading consignment data', error);
        });

        // Pass data to the next page
        
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="file"
            accept=".xlsx"
            onChange={handleFileChange}
            className="p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h2>NB:</h2>
        <ul className="list-disc list-inside text-left">
          <li>Uploaded file type must be .xlsx format.</li>
          <li>Amount must include delivery charge.</li>
          <li>Only first sheet's data will be imported.</li>
        </ul>
        <div>
          <p>Demo Picture:</p>
          <img src="demo-image.png" alt="demo" />
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
