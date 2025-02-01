import React, { useState } from 'react';
import '../styles/global.css'

const Bitso = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');  // Default is Bitcoin (BTC)

  const handleSend = () => {
    // Logic for processing the Bitso transaction (could integrate with Bitso API)
    console.log('Sending:', {
      recipient,
      amount,
      currency,
    });
    alert(`Transaction initiated:\n\nRecipient: ${recipient}\nAmount: ${amount} ${currency}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-green-700 mb-6">
          Send Payment via Bitso
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Enter the details below to send crypto via Bitso securely.
        </p>
        <div className="space-y-6 text-left">
          {/* Recipient Email or Phone */}
          <div>
            <label htmlFor="recipient" className="block text-gray-700 font-medium mb-2">
              Recipient&apos;s Bitso Email/Phone
            </label>
            <input
              type="text"
              id="recipient"
              placeholder="Enter recipient's Bitso email or phone"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
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
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="ETH">Ethereum (ETH)</option>
              <option value="USD">US Dollar (USD)</option>
              {/* Add other cryptocurrencies or fiat options if needed */}
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

export default Bitso;
