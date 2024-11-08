"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer"; // Import Footer component
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function Login() {
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
              Mtech Hostel App
            </h2>
            <div>
              <SignedOut>
                <div className="flex w-full justify-center">
                  <SignInButton>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
                      Sign In
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
