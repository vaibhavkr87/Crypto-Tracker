import { useState } from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setCryptoData, updateCryptoPrices } from './features/crypto/cryptoSlice';
import CryptoTable from './components/CryptoTable';
import sampleData from './data/sampleData';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const crypto = useSelector((state: RootState) => state.crypto.data);

  // 🔍 State for search input
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(setCryptoData(sampleData));
    const interval = setInterval(() => {
      dispatch(updateCryptoPrices());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  // 🔍 Filtered data based on search
  const filteredCoins = crypto.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-screen-xl mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
        📈 Real-Time Crypto Price Tracker
      </h1>

      {/* 🔍 Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by coin name or symbol..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => dispatch(updateCryptoPrices())}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
         🔄 Refresh Prices
        </button>
        </div>

      {/* 🔁 Pass filtered coins */}
      <CryptoTable data={filteredCoins} />
    </div>
  );
};

export default App;
