import React from 'react';
import { useLocation } from 'react-router-dom';

const DataDisplay = () => {
  const location = useLocation();
  const { state } = location;
  const { sheetData } = state || {};

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">Imported Consignment ({sheetData ? sheetData.length : 0})</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Creation Date</th>
            <th className="py-2">Id</th>
            <th className="py-2">Invoice</th>
            <th className="py-2">Tracking Code</th>
            <th className="py-2">Customer Name</th>
            <th className="py-2">Cod Amount</th>
            <th className="py-2">Lot</th>
            <th className="py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {sheetData && sheetData.length > 0 ? (
            sheetData.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{new Date().toLocaleString()}</td>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{row.Invoice}</td>
                <td className="py-2">{row.TrackingCode || 'N/A'}</td>
                <td className="py-2">{row.Name}</td>
                <td className="py-2">{row.Amount}</td>
                <td className="py-2">{row.Lot || 'N/A'}</td>
                <td className="py-2">{row.Notes || 'Optional'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button
        onClick={() => window.print()}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
      >
        Print
      </button>
    </div>
  );
};

export default DataDisplay;
