import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaSignOutAlt,
  FaUniversity,
  FaBell,
  FaUserCircle,
} from "react-icons/fa"; // Import the required icons
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-4 shadow-md font-roboto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section with Custom Icon */}
        <Link href="/dashboard" className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dosdjk5jz/image/upload/v1730886155/Squircle_qc5rpa.svg"
            alt="M.Tech Hostel App Logo"
            className="w-8 h-8" // Adjust size here
          />
          <span className="text-white font-lora text-2xl font-bold hover:text-indigo-200 transition-all duration-300">
            M.Tech Hostel App
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="space-x-4 hidden md:flex">
          <Link
            href="/dashboard"
            className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Dashboard
          </Link>
          <Link
            href="/mess"
            className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Inventory
          </Link>
          <Link
            href="/food-chart"
            className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Food Chart
          </Link>
          <Link
            href="/reports"
            className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Reports
          </Link>
          <Link
            href="/contacts"
            className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Important Contacts
          </Link>
          {/* Logout Button */}
          
          <div>
          <SignedIn>
                <div>
                  <UserButton>
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300">
                      User
                    </button>
                  </UserButton>
                </div>
              </SignedIn>
              </div>
        </div>

        {/* Burger Menu Icon */}
        <div className="md:hidden flex items-center">
          <motion.div
            className="flex flex-col space-y-1 cursor-pointer"
            onClick={toggleMenu}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="w-8 h-1 bg-white rounded-full"></span>
            <span className="w-8 h-1 bg-white rounded-full"></span>
            <span className="w-8 h-1 bg-white rounded-full"></span>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu - Sliding */}
      <motion.div
        className={`md:hidden bg-gradient-to-r from-indigo-600 to-indigo-800 p-4 fixed inset-0 z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-end">
          <motion.div
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            &times;
          </motion.div>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-4">
          <Link
            href="/dashboard"
            className="text-white text-xl hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Dashboard
          </Link>
          <Link
            href="/mess"
            className="text-white text-xl hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Inventory
          </Link>
          <Link
            href="/food-chart"
            className="text-white text-xl hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Food Chart
          </Link>
          <Link
            href="/reports"
            className="text-white text-xl hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Reports
          </Link>
          <Link
            href="/contacts"
            className="text-white text-xl hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Important Contacts
          </Link>

          {/* Logout Button in Mobile Menu */}

          <div>
          <SignedIn>
                <div>
                  <UserButton>
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300">
                      User
                    </button>
                  </UserButton>
                </div>
              </SignedIn>
              </div>
        </div>

        {/* Logo in the blank space below */}
        <div className="mt-10 mx-auto flex justify-center">
          <img
            src="https://res.cloudinary.com/dosdjk5jz/image/upload/v1730886155/Squircle_qc5rpa.svg"
            alt="Logo"
            className="w-44 h-44" // Standard size for the logo in the mobile menu
          />
        </div>
      </motion.div>
    </nav>
  );
}
