"use client";

import React, { useState } from 'react';
import { FaDownload, FaFileAlt, FaBuilding, FaMoneyBillWave } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReportsPage = () => {
  const [selectedReport, setSelectedReport] = useState<string>('');

  // Sample Data
  const expenseData = [
    { id: 1, category: 'Food', amount: 5000, date: '2024-09-01' },
    { id: 2, category: 'Utility Bills', amount: 3000, date: '2024-09-05' },
    { id: 3, category: 'Salaries', amount: 25000, date: '2024-09-10' },
    { id: 4, category: 'Repairs', amount: 2000, date: '2024-09-12' },
  ];

  const hostelData = [
    { RoomNumber: 101, Capacity: 4, Occupants: 4, Available: false },
    { RoomNumber: 102, Capacity: 4, Occupants: 4, Available: false },
    { RoomNumber: 103, Capacity: 4, Occupants: 4, Available: false },
    { RoomNumber: 104, Capacity: 4, Occupants: 4, Available: false },
  ];

  const fundsData = {
    totalFunds: 500000,
    allocated: {
      food: 100000,
      infrastructure: 150000,
      salaries: 200000,
      miscellaneous: 50000,
    },
    remaining: 50000,
  };

  const handleDownload = (reportType: string) => {
    const url = `/api/generate-pdf?reportType=${reportType}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-2">Financial & Resource Reports</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Insightful reports to track expenses, funds, and resources.</p>
          </header>

          {/* Expense Report Section */}
          <ReportSection
            title="Expense Report"
            icon={<FaFileAlt className="text-2xl sm:text-3xl" />}
            data={expenseData}
            handleDownload={() => handleDownload('expenses')}
            gradient="from-indigo-500 to-indigo-600"
            bgColor="bg-indigo-50"
            textColor="text-indigo-900"
          />

          {/* Hostel Report Section */}
          <ReportSection
            title="Hostel Report"
            icon={<FaBuilding className="text-2xl sm:text-3xl" />}
            data={hostelData}
            handleDownload={() => handleDownload('hostel')}
            gradient="from-green-500 to-green-600"
            bgColor="bg-green-50"
            textColor="text-green-900"
          />

          {/* Funds Availability Section */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8 sm:mb-10 lg:mb-12">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-4 sm:p-5 lg:p-6 rounded-t-lg flex items-center space-x-3 sm:space-x-4">
              <FaMoneyBillWave className="text-2xl sm:text-3xl" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Funds Availability</h3>
            </div>
            <div className="p-4 sm:p-5 lg:p-6 bg-yellow-50 text-gray-800 rounded-b-lg sm:rounded-b-xl">
              <p className="mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg"><strong>Total Funds:</strong> ₹{fundsData.totalFunds}</p>
              <p className="mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base lg:text-lg"><strong>Allocated Funds:</strong></p>
              <ul className="list-disc pl-5 space-y-2 sm:space-y-3 lg:space-y-4 text-gray-700 text-sm sm:text-base lg:text-lg">
                <li>Food: ₹{fundsData.allocated.food}</li>
                <li>Infrastructure: ₹{fundsData.allocated.infrastructure}</li>
                <li>Salaries: ₹{fundsData.allocated.salaries}</li>
                <li>Miscellaneous: ₹{fundsData.allocated.miscellaneous}</li>
              </ul>
              <p className="mt-4 sm:mt-5 lg:mt-6 text-sm sm:text-base lg:text-xl font-semibold"><strong>Remaining Funds:</strong> ₹{fundsData.remaining}</p>
              <div className="mt-4 sm:mt-5 lg:mt-6 flex justify-center">
                <button
                  onClick={() => handleDownload('funds')}
                  className="px-5 py-2 sm:px-6 sm:py-3 lg:px-7 lg:py-4 bg-yellow-600 text-white rounded-full flex items-center gap-2 sm:gap-3 lg:gap-4 hover:bg-yellow-700 transition-all duration-300 shadow-md"
                >
                  <FaDownload className="text-sm sm:text-lg lg:text-xl" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

type ReportSectionProps = {
  title: string;
  icon: React.ReactNode;
  data: { [key: string]: string | number | boolean }[];
  handleDownload: () => void;
  gradient: string;
  bgColor: string;
  textColor: string;
};

const ReportSection: React.FC<ReportSectionProps> = ({
  title,
  icon,
  data,
  handleDownload,
  gradient,
  bgColor,
  textColor
}) => {
  return (
    <div className="rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-6 sm:mb-8 lg:mb-10">
      <div className={`bg-gradient-to-r ${gradient} text-white p-4 sm:p-5 lg:p-6 rounded-t-lg flex items-center space-x-3 sm:space-x-4`}>
        {icon}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{title}</h3>
      </div>
      <div className={`p-4 sm:p-5 lg:p-6 ${bgColor} ${textColor} rounded-b-lg sm:rounded-b-xl`}>
        {data && data.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full mt-4 text-sm sm:text-base lg:text-lg border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-200">
                  {Object.keys(data[0]).map((key, i) => (
                    <th key={i} className="px-3 py-2 sm:px-4 sm:py-3 text-left font-semibold border-b text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition-all duration-200">
                    {Object.values(item).map((value, i) => (
                      <td key={i} className="px-3 py-2 sm:px-4 sm:py-3 border-b text-gray-800">
                        {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
        <div className="mt-4 sm:mt-5 lg:mt-6 flex justify-center">
          <button
            onClick={handleDownload}
            className="px-5 py-2 sm:px-6 sm:py-3 lg:px-7 lg:py-4 bg-blue-600 text-white rounded-full flex items-center gap-2 sm:gap-3 lg:gap-4 hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            <FaDownload className="text-sm sm:text-lg lg:text-xl" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
