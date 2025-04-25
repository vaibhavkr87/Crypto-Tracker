import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setCryptoData, updateCryptoPrices } from './features/crypto/cryptoSlice';
import CryptoTable from './components/CryptoTable';
import sampleData from './data/sampleData';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const crypto = useSelector((state: RootState) => state.crypto.data);

  useEffect(() => {
    dispatch(setCryptoData(sampleData));
    const interval = setInterval(() => {
      dispatch(updateCryptoPrices());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-screen-xl mx-auto">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
      📈 Real-Time Crypto Price Tracker
    </h1>
    <CryptoTable data={crypto} />
  </div>
  );
};

export default App;