import React from "react";
import { Crypto } from "../features/crypto/cryptoSlice";

interface Props {
  data: Crypto[];
}

const CryptoTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full table-auto border text-xs sm:text-sm md:text-base">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs sm:text-sm">
          <tr>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3">Symbol</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">1hr %</th>
            <th className="px-4 py-3">24h %</th>
            <th className="px-4 py-3">7d %</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">24h Volume</th>
            <th className="px-4 py-3">Supply</th>
            <th className="px-4 py-3">7D Chart</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((coin, index) => (
            <tr
              key={coin.id}
              className="text-center hover:bg-gray-50 transition h-20"
            >
              <td className="px-2 py-3 align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-yellow-400 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </td>

              <td className="px-2 py-3 align-middle">{index + 1}</td>

              <td>
                <div>
                  <div>
                    <img
                      src={coin.logo}
                      alt={coin.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>{coin.name}</span>
                </div>
              </td>

              <td className="px-2 py-3 align-middle">{coin.symbol}</td>
              <td className="px-2 py-3 align-middle">
                ${coin.price?.toLocaleString()}
              </td>

              <td
                className={`px-2 py-3 font-medium align-middle ${
                  coin.change1h > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change1h}%
              </td>

              <td
                className={`px-2 py-3 font-medium align-middle ${
                  coin.change24h > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change24h}%
              </td>

              <td
                className={`px-2 py-3 font-medium align-middle ${
                  coin.change7d > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {coin.change7d}%
              </td>

              <td className="px-2 py-3 align-middle">
                ${coin.marketCap.toLocaleString()}
              </td>

              <td className="px-2 py-3 align-middle">
                <div className="flex flex-col items-center gap-1">
                  <span>${coin.volume24h.toLocaleString()}</span>
                  <span className="text-xs text-gray-400">{coin.data}</span>
                </div>
              </td>

              <td className="px-2 py-3 align-middle">
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
    </div>
  );
};

export default CryptoTable;
