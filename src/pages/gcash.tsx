import React, { useState } from 'react';
import '../styles/global.css'

const GCash = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('PHP');  // GCash mainly uses PHP (Philippine Peso)

  const handleSend = () => {
    // Logic for processing the GCash transaction (can integrate with payment API)
    console.log('Sending:', {
      phoneNumber,
      amount,
      currency,
    });
    alert(`Transaction initiated:\n\nPhone Number: ${phoneNumber}\nAmount: ${amount} ${currency}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
          Send Payment via GCash
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Enter the details below to send payment via GCash.
        </p>
        <div className="space-y-6 text-left">
          {/* GCash Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
              GCash Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter GCash phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Currency */}
          <div>
            <label htmlFor="currency" className="block text-gray-700 font-medium mb-2">
              Currency
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="PHP">PHP</option>
              <option value="USD">USD</option>
              <option value="BTC">BTC</option>  {/* Optional for cryptocurrency */}
              <option value="ETH">ETH</option>  {/* Optional for cryptocurrency */}
            </select>
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transform hover:scale-105 transition duration-300 shadow-md"
          >
            Send Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default GCash;
