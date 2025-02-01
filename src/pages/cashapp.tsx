import React, { useState } from 'react';
import '../styles/global.css'

const CashApp = () => {
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleSend = () => {
    // Logic to process the Cash App payment request (this could be tied to a backend API later)
    console.log('Sending:', {
      username,
      amount,
      currency,
    });
    alert(`Transaction initiated:\n\nCash App Username: ${username}\nAmount: ${amount} ${currency}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-green-600 mb-6">
          Send Money via Cash App
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Enter the details below to send currency via Cash App.
        </p>
        <div className="space-y-6 text-left">
          {/* Cash App Username */}
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Cash App Username (e.g., $username)
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter Cash App username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="USD">USD</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="USDT">USDT</option>
            </select>
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transform hover:scale-105 transition duration-300 shadow-md"
          >
            Send Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashApp;
