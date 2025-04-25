import { AppDispatch } from '../store';
import { updateAsset } from '../features/crypto/cryptoSlice';

export const simulateWebSocket = (dispatch: AppDispatch, assets: any[]) => {
  setInterval(() => {
    const updated = assets.map(asset => ({
      ...asset,
      price: +(asset.price * (1 + (Math.random() - 0.5) / 50)).toFixed(2),
      change1h: +(Math.random() * 10 - 5).toFixed(2),
      volume24h: asset.volume24h + Math.floor(Math.random() * 1000),
    }));

    updated.forEach(asset => dispatch(updateAsset(asset)));
  }, 1500);
};
