'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const foodData = [
  { day: 'Monday', lunch: 'Grilled chicken salad with rice', dinner: 'Spaghetti Bolognese with garlic bread' },
  { day: 'Tuesday', lunch: 'Veggie burger with fries', dinner: 'Chicken curry with naan' },
  { day: 'Wednesday', lunch: 'Quinoa and roasted veggie bowl', dinner: 'Beef stir-fry with noodles' },
  { day: 'Thursday', lunch: 'Caesar salad with grilled salmon', dinner: 'Tandoori chicken with basmati rice' },
  { day: 'Friday', lunch: 'Chickpea wrap with hummus', dinner: 'Pizza night with assorted toppings' },
  { day: 'Saturday', lunch: 'Turkey sandwich with sweet potato fries', dinner: 'BBQ ribs with mashed potatoes' },
  { day: 'Sunday', lunch: 'Pasta primavera with garlic bread', dinner: 'Roast chicken with veggies' },
];

export default function FoodChart() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-gray-100 to-white">
      <Navbar />
      <main className="flex-1 p-4 sm:p-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-2">Weekly Food Chart</h2>
            <p className="text-base sm:text-lg text-gray-600">A balanced, delicious menu for the week!</p>
          </header>

          {/* Responsive table container */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-indigo-600 text-white text-sm sm:text-lg font-semibold">
                  <th className="p-3 sm:p-4 uppercase tracking-wider">Day</th>
                  <th className="p-3 sm:p-4 uppercase tracking-wider">Lunch</th>
                  <th className="p-3 sm:p-4 uppercase tracking-wider">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {foodData.map((meal, index) => (
                  <tr
                    key={index}
                    className={`text-center text-gray-700 hover:bg-indigo-50 transition duration-200 ease-in-out ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="p-3 sm:p-4 font-semibold text-indigo-800 border-b border-gray-200">{meal.day}</td>
                    <td className="p-3 sm:p-4 border-b border-gray-200 hover:text-indigo-600">{meal.lunch}</td>
                    <td className="p-3 sm:p-4 border-b border-gray-200 hover:text-indigo-600">{meal.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download button */}
          <div className="mt-6 flex justify-center">
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-full flex items-center gap-2 hover:bg-indigo-700 transition-all duration-300">
              Download PDF
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
