'use client';

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUniversity, FaBed, FaUtensils, FaBell, FaDollarSign } from 'react-icons/fa';
import Footer from "../components/Footer";

const Dashboard = () => {
  const [hostelData, setHostelData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHostelData({
        totalStudents: 120,
        availableRooms: 50,
        messStatus: "Open",
        vegetarianMeals: 50,
        nonVegetarianMeals: 40,
        halalNonVegMeals: 30,
        notices: [
          "Notice 1: Upcoming Mess Meeting on 15th Nov.",
          "Notice 2: The mess in M.Tech-Hostel will resume operations from 07th November."
        ]
      });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />
      <main className="mx-auto flex-1 p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Hostel Overview Card */}
          <motion.div
            className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <FaUniversity className="text-blue-500 text-2xl" />
              <span>Hostel Overview</span>
            </h3>
            <div className="mt-4 space-y-3">
              <p className="text-gray-600">
                Total Students: <span className="font-bold">{loading ? "Loading..." : hostelData?.totalStudents}</span>
              </p>
              <p className="text-gray-600">
                Available Rooms: <span className="font-bold">{loading ? "Loading..." : hostelData?.availableRooms}</span>
              </p>
              <p className="text-gray-600">
                Mess Status: <span className={`font-bold ${hostelData?.messStatus === "Open" ? "text-green-500" : "text-red-500"}`}>
                  {loading ? "Loading..." : hostelData?.messStatus}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Mess Details Card */}
          <motion.div
            className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <FaUtensils className="text-green-500 text-2xl" />
              <span>Mess Details</span>
            </h3>
            <div className="mt-4 space-y-3">
              <p className="text-gray-600">
                Vegetarian Meals: <span className="font-bold">{loading ? "Loading..." : hostelData?.vegetarianMeals}</span>
              </p>
              <p className="text-gray-600">
                Non-Vegetarian Meals: <span className="font-bold">{loading ? "Loading..." : hostelData?.nonVegetarianMeals}</span>
              </p>
              <p className="text-gray-600">
                Halal Non-Vegetarian Meals: <span className="font-bold">{loading ? "Loading..." : hostelData?.halalNonVegMeals}</span>
              </p>
            </div>
          </motion.div>

          {/* Notices Card */}
          <motion.div
            className="bg-yellow-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <FaBell className="text-yellow-500 text-2xl" />
              <span>Notices</span>
            </h3>
            <ul className="mt-4 space-y-3">
              {loading ? (
                <li className="text-gray-600">Loading notices...</li>
              ) : (
                hostelData?.notices?.map((notice: string, index: number) => (
                  <li key={index} className="text-gray-600">{notice}</li>
                ))
              )}
            </ul>
          </motion.div>

          {/* Add Expense Card */}
          <motion.div
            className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <FaDollarSign className="text-indigo-500 text-2xl" />
              <span>Add Expense</span>
            </h3>
            <div className="mt-4 space-y-3">
              <p className="text-gray-600">Manage and add new expenses to your hostel records.</p>
              <Link
                href="/add-expense"
                className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 ease-in-out flex items-center space-x-2"
              >
                <FaDollarSign className="text-lg" />
                <span>Add New Expense</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Quick Links Card */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
            <FaUtensils className="text-purple-500 text-2xl" />
            <span>Quick Links</span>
          </h3>
          <div className="mt-4 space-y-3">
            <Link href="/mess" className="text-purple-600 hover:text-purple-800 transition-colors duration-300 ease-in-out flex items-center space-x-2">
              <FaBed className="text-lg" />
              <span>Manage Inventory</span>
            </Link>
            <Link href="/food-chart" className="text-purple-600 hover:text-purple-800 transition-colors duration-300 ease-in-out flex items-center space-x-2">
              <FaUtensils className="text-lg" />
              <span>Food Chart</span>
            </Link>
            <Link href="/hostel-requests" className="text-purple-600 hover:text-purple-800 transition-colors duration-300 ease-in-out flex items-center space-x-2">
              <FaBed className="text-lg" />
              <span>Hostel Requests</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
