import React, { useState } from 'react';
import '../styles/global.css'

const TrustWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BNB');  // Default is Binance Coin (BNB)

  const handleSend = () => {
    // Logic for processing the Trust Wallet transaction (can integrate with payment API)
    console.log('Sending:', {
      walletAddress,
      amount,
      currency,
    });
    alert(`Transaction initiated:\n\nWallet Address: ${walletAddress}\nAmount: ${amount} ${currency}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-purple-600 mb-6">
          Send Payment via Trust Wallet
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Enter the details below to send cryptocurrency through Trust Wallet.
        </p>
        <div className="space-y-6 text-left">
          {/* Wallet Address */}
          <div>
            <label htmlFor="walletAddress" className="block text-gray-700 font-medium mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              placeholder="Enter wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
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
              <option value="BNB">Binance Coin (BNB)</option>
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="ETH">Ethereum (ETH)</option>
              <option value="USDT">Tether (USDT)</option>
              {/* You can add more cryptocurrencies here if needed */}
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

export default TrustWallet;
