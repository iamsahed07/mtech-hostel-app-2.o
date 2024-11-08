"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCarrot, FaUtensils, FaClipboardList } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MessManagementPage = () => {
  const [groceries, setGroceries] = useState<any[]>([]);
  const [inputQuantity, setInputQuantity] = useState<number | string>("");
  const [outputQuantity, setOutputQuantity] = useState<number | string>("");
  const [selectedGrocery, setSelectedGrocery] = useState<string>("");
  const [otherGrocery, setOtherGrocery] = useState<string>("");
  const [transactionDate, setTransactionDate] = useState<string>("");
  const [inputPrice, setInputPrice] = useState<number | string>("");
  const [inventoryLogs, setInventoryLogs] = useState<any[]>([]); // Logs for all transactions
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setGroceries([
        { id: 1, name: "Cooking Oil", stock: 50, price: 190, inputLogs: [], outputLogs: [] },
        { id: 2, name: "Potato", stock: 100, price: 25, inputLogs: [], outputLogs: [] },
        { id: 3, name: "Onion", stock: 80, price: 70, inputLogs: [], outputLogs: [] },
        { id: 4, name: "Chicken", stock: 40, price: 300, inputLogs: [], outputLogs: [] },
        { id: 5, name: "Rice", stock: 150, price: 60, inputLogs: [], outputLogs: [] },
        { id: 6, name: "LPG", stock: 1, price: 40, inputLogs: [], outputLogs: [] },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleInputSubmit = () => {
    const groceryName = selectedGrocery === "Other" ? otherGrocery : selectedGrocery;

    if (!groceryName || !inputQuantity || !transactionDate || !inputPrice) {
      alert("Please fill in all the fields.");
      return;
    }

    const groceryIndex = groceries.findIndex((g) => g.name === groceryName);
    const inputLog = { type: "Input", name: groceryName, quantity: inputQuantity, date: transactionDate, price: inputPrice };
    setInventoryLogs([...inventoryLogs, inputLog]);

    if (groceryIndex !== -1) {
      const updatedGroceries = [...groceries];
      updatedGroceries[groceryIndex].stock += Number(inputQuantity);
      updatedGroceries[groceryIndex].inputLogs.push({
        quantity: inputQuantity,
        date: transactionDate,
        price: inputPrice,
      });
      setGroceries(updatedGroceries);
    } else if (selectedGrocery === "Other") {
      const newGrocery = {
        id: groceries.length + 1,
        name: otherGrocery,
        stock: Number(inputQuantity),
        price: Number(inputPrice),
        inputLogs: [{ quantity: inputQuantity, date: transactionDate, price: inputPrice }],
        outputLogs: [],
      };
      setGroceries([...groceries, newGrocery]);
    }

    setInputQuantity("");
    setInputPrice("");
    setTransactionDate("");
    setSelectedGrocery("");
    setOtherGrocery("");
  };

  const handleOutputSubmit = () => {
    const groceryName = selectedGrocery === "Other" ? otherGrocery : selectedGrocery;

    if (!groceryName || !outputQuantity || !transactionDate) {
      alert("Please fill in all the fields.");
      return;
    }

    const groceryIndex = groceries.findIndex((g) => g.name === groceryName);
    const outputLog = { type: "Output", name: groceryName, quantity: outputQuantity, date: transactionDate };
    setInventoryLogs([...inventoryLogs, outputLog]);

    if (groceryIndex !== -1) {
      const updatedGroceries = [...groceries];
      const currentStock = updatedGroceries[groceryIndex].stock;
      if (currentStock < Number(outputQuantity)) {
        alert("Insufficient stock.");
        return;
      }
      updatedGroceries[groceryIndex].stock -= Number(outputQuantity);
      updatedGroceries[groceryIndex].outputLogs.push({
        quantity: outputQuantity,
        date: transactionDate,
      });
      setGroceries(updatedGroceries);
    }

    setOutputQuantity("");
    setTransactionDate("");
    setSelectedGrocery("");
    setOtherGrocery("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />
      <div className="container mx-auto flex-1 flex flex-col p-6 lg:p-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-semibold text-gray-700 flex items-center space-x-2 mb-6">
              <FaCarrot className="text-green-500 text-3xl" />
              <span> | Grocery Input</span>
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Grocery</label>
                <select value={selectedGrocery} onChange={(e) => setSelectedGrocery(e.target.value)} className="mt-2 w-full p-3 rounded-xl border border-gray-300">
                  <option value="">Select Grocery</option>
                  {groceries.map((grocery) => (
                    <option key={grocery.id} value={grocery.name}>{grocery.name}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {selectedGrocery === "Other" && (
                  <input type="text" value={otherGrocery} onChange={(e) => setOtherGrocery(e.target.value)} placeholder="Enter grocery name" className="mt-2 w-full p-3 rounded-xl border border-gray-300" />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
                <input type="number" value={inputQuantity} onChange={(e) => setInputQuantity(e.target.value)} className="mt-2 w-full p-3 rounded-xl border border-gray-300" placeholder="Enter quantity" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price per kg</label>
                <input type="number" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} className="mt-2 w-full p-3 rounded-xl border border-gray-300" placeholder="Enter price per kg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Transaction Date</label>
                <input type="date" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} className="mt-2 w-full p-3 rounded-xl border border-gray-300" />
              </div>
              <button onClick={handleInputSubmit} className="mt-6 w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition duration-300">Add Input</button>
            </div>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-semibold text-gray-700 flex items-center space-x-2 mb-6">
              <FaUtensils className="text-orange-500 text-3xl" />
              <span> | Grocery Output</span>
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Grocery</label>
                <select value={selectedGrocery} onChange={(e) => setSelectedGrocery(e.target.value)} className="mt-2 w-full p-3 rounded-xl border border-gray-300">
                  <option value="">Select Grocery</option>
                  {groceries.map((grocery) => (
                    <option key={grocery.id} value={grocery.name}>{grocery.name}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {selectedGrocery === "Other" && (
                  <input type="text" value={otherGrocery} onChange={(e) => setOtherGrocery(e.target.value)} placeholder="Enter grocery name" className="mt-2 w-full p-3 rounded-xl border border-gray-300" />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
                <input type="number" value={outputQuantity} onChange={(e) => setOutputQuantity(e.target.value)} className="mt-2 w-full p-3 rounded-xl border border-gray-300" placeholder="Enter quantity" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Transaction Date</label>
                <input type="date" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} className="mt-2 w-full p-3 rounded-xl border border-gray-300" />
              </div>
              <button onClick={handleOutputSubmit} className="mt-6 w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition duration-300">Record Output</button>
            </div>
          </motion.div>
        </div>
        
        <motion.div className="bg-white p-6 rounded-2xl shadow-lg mt-8 transition-all duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-gray-700 flex items-center space-x-2 mb-6">
            <FaClipboardList className="text-blue-500 text-3xl" />
            <span> | Inventory Log</span>
          </h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {inventoryLogs.length === 0 ? (
              <p className="text-gray-500">No transactions logged yet.</p>
            ) : (
              inventoryLogs.map((log, index) => (
                <div key={index} className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{log.type} - {log.name}</p>
                    <p className="text-gray-600">Quantity: {log.quantity} kg</p>
                    <p className="text-gray-600">Date: {log.date}</p>
                    {log.type === "Input" && <p className="text-gray-600">Price: ₹{log.price} per kg</p>}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${log.type === "Input" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"}`}>
                    {log.type}
                  </span>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default MessManagementPage;
