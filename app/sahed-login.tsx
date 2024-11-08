"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";  // Import Footer component

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        
        {/* Login Form Section */}
        <div className="flex w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col w-full p-6 sm:p-8 md:p-10 lg:p-12">
            
            {/* Banner Image */}
            <div className="mb-6 flex justify-center">
              <Image
                src="https://res.cloudinary.com/dosdjk5jz/image/upload/v1730882503/M.Tech_Hostel_KGEC_wrr0eg.png"
                alt="M.Tech Hostel KGEC Banner"
                width={1920}
                height={400}
                className="object-contain w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px]"
              />
            </div>

            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              M.Tech Hostel App
            </h2>

            <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
              
              {/* Email Input Field */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input Field */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-indigo-700 transition duration-300"
              >
                Login
              </button>

              {/* Link to Sign-up page */}
              <div className="text-center text-gray-600 mt-4">
                <p>
                  Don’t have an account?{" "}
                  <Link href="/signup" className="text-indigo-500 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
