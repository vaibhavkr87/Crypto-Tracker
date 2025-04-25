import React from "react";
import { Crypto } from "../features/crypto/cryptoSlice";

interface Props {
  data: Crypto[];
}

const CryptoTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th></th>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>7D chart</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => (
            <tr key={coin.id} className="text-center border-t">
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-3 size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </td>
              <td>{index + 1}</td>
              <td className="p-2">
                <span className="flex items-center justify-self-center">
                  <img
                    src={coin.logo}
                    alt={coin.name}
                    className="w-6 h-6 mx-auto mr-3"
                  />
                  {coin.name}
                </span>
              </td>

              <td>{coin.symbol}</td>
              <td>${coin.price?.toLocaleString()}</td>
              <td
                className={
                  coin.change1h > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {coin.change1h}%
              </td>
              <td
                className={
                  coin.change24h > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {coin.change24h}%
              </td>
              <td
                className={
                  coin.change7d > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {coin.change7d}%
              </td>
              <td>${coin.marketCap.toLocaleString()}</td>
              <td>
                <span>
                  <p>${coin.volume24h.toLocaleString()}</p>
                  <p>{coin.data}</p>
                </span>
              </td>
              <td>{coin.circulatingSupply.toLocaleString()}</td>
              <td className="p-2">
                <img
                  src={coin.chartImage}
                  alt={coin.name}
                  className="object-contain h-12 w-auto flex justify-center pl-20 items-center"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
