import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  data:string;
  circulatingSupply: number;
  chartImage: string;

}

interface CryptoState {
  data: Crypto[];
}

const initialState: CryptoState = {
  data: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptoData: (state, action: PayloadAction<Crypto[]>) => {
      state.data = action.payload;
    },
    updateCryptoPrices: (state) => {
      state.data = state.data.map((coin) => ({
        ...coin,
        price: +(coin.price * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2),
        change1h: +(Math.random() * 2 - 1).toFixed(2),
        change24h: +(Math.random() * 5 - 2.5).toFixed(2),
        change7d: +(Math.random() * 10 - 5).toFixed(2),
        volume24h: +(coin.volume24h * (1 + (Math.random() - 0.5) * 0.05)).toFixed(2),
      }));
    },
  },
});

export const { setCryptoData, updateCryptoPrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;