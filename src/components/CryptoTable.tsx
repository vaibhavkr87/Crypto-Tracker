import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import {
  updateCryptoPrices,
} from "../features/crypto/cryptoSlice";

const CryptoTable = () => {
  const dispatch = useDispatch();
  const cryptoData = useSelector((state: RootState) => state.crypto.data);
  const searchTerm = useSelector((state: RootState) => state.crypto.searchTerm);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCryptoPrices());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const filteredData = cryptoData.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 text-white dark:bg-[#0d1117] min-h-screen">
       <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full text-sm table-auto border border-gray-700">
          <thead className="bg-[#161b22] text-gray-300">
            <tr>
              <th className="p-2 border-b border-gray-700">Logo</th>
              <th className="p-2 border-b border-gray-700">Name</th>
              <th className="p-2 border-b border-gray-700">Symbol</th>
              <th className="p-2 border-b border-gray-700">Price</th>
              <th className="p-2 border-b border-gray-700">1h%</th>
              <th className="p-2 border-b border-gray-700">24h%</th>
              <th className="p-2 border-b border-gray-700">7d%</th>
              <th className="p-2 border-b border-gray-700">Market Cap</th>
              <th className="p-2 border-b border-gray-700">Volume (24h)</th>
              <th className="p-2 border-b border-gray-700">Supply</th>
              <th className="p-2 border-b border-gray-700">Chart</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((coin) => (
              <tr
                key={coin.id}
                className="text-center border-b border-gray-800 hover:bg-[#1c1f26] transition"
              >
                <td className="p-2">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-6 h-6">
                      <img
                        src={coin.logo}
                        alt={coin.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-white">{coin.name}</span>
                  </div>
                </td>

                <td className="p-2">{coin.name}</td>
                <td className="p-2 uppercase">{coin.symbol}</td>
                <td className="p-2">${coin.price.toLocaleString()}</td>
                <td
                  className={`p-2 ${
                    coin.change1h >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {coin.change1h}%
                </td>
                <td
                  className={`p-2 ${
                    coin.change24h >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {coin.change24h}%
                </td>
                <td
                  className={`p-2 ${
                    coin.change7d >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {coin.change7d}%
                </td>
                <td className="p-2">${coin.marketCap.toLocaleString()}</td>
                <td className="p-2">${coin.volume24h.toLocaleString()}</td>
                <td className="p-2">
                  {coin.circulatingSupply.toLocaleString()}
                </td>

                <td className="px-2 py-3 align-middle">
                  <div className="w-20 h-8 mx-auto">
                    <img
                      src={coin.chartImage}
                      alt={`${coin.name} chart`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <div className="text-center text-gray-400 p-4">
            No matching results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoTable;
