import React, { useState } from 'react';
import '../styles/global.css'

const MetaMask = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('ETH'); // Default is Ethereum (ETH)

  const handleSend = () => {
    // Logic for sending cryptocurrency via MetaMask (could be integrated with MetaMask API)
    console.log('Sending:', {
      recipient,
      amount,
      currency,
    });
    alert(`Transaction initiated:\n\nRecipient: ${recipient}\nAmount: ${amount} ${currency}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          Send Payment via MetaMask
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Enter the details below to send crypto via MetaMask securely.
        </p>
        <div className="space-y-6 text-left">
          {/* Recipient MetaMask Address */}
          <div>
            <label htmlFor="recipient" className="block text-gray-700 font-medium mb-2">
              Recipient&apos;s MetaMask Address
            </label>
            <input
              type="text"
              id="recipient"
              placeholder="Enter recipient's MetaMask address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="ETH">Ethereum (ETH)</option>
              <option value="USDT">Tether (USDT)</option>
              <option value="DAI">Dai (DAI)</option>
              {/* Add other ERC-20 token options if needed */}
            </select>
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-medium hover:bg-purple-600 transform hover:scale-105 transition duration-300 shadow-md"
          >
            Send Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetaMask;
