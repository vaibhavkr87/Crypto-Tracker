import { Crypto } from '../features/crypto/cryptoSlice';
import bitcoin from '../assets/bitcoin-btc-logo.png';
import ethereum from '../assets/ethereum-eth-logo.png';
import tether from '../assets/tether-usdt-logo.png';
import solana from '../assets/solana-sol-logo.png';
import xrp from '../assets/xrp-xrp-logo.png';
import bnb from '../assets/bnb-bnb-logo.png';
import bitcoinchart from '../assets/BTCUSD.png';
import ethereumchart from '../assets/ETHEREUM.png';
import tetherchart from '../assets/TETHERUSDT.png';
import solanachart from '../assets/SOLUSD.png';
import xrpchart from '../assets/XRP.png';
import bnbchart from '../assets/BNB.png';

const sampleData: Crypto[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: bitcoin,
    price: 30000,
    change1h: 0.2,
    change24h: -1.5,
    change7d: 3.8,
    marketCap: 580000000000,
    volume24h: 18000000000,
    data: "19.00M BTC",
    circulatingSupply: 19000000,
    chartImage: bitcoinchart,
  },

    {
        id: 'eth',
        name: 'Ethereum',
        symbol: 'ETH',
        logo: ethereum,
        price: 2000,
        change1h: 0.5,
        change24h: -2.0,
        change7d: 4.5,
        marketCap: 220000000000,
        volume24h: 8000000000,
        data: "120.00M ETH",
        circulatingSupply: 120000000,
        chartImage: ethereumchart,
    },
    {
        id: 'usdt',
        name: 'Tether',
        symbol: 'USDT',
        logo: tether,
        price: 1,
        change1h: 0.0,
        change24h: 0.0,
        change7d: 0.0,
        marketCap: 68000000000,
        volume24h: 20000000000,
        data: "68.00B USDT",
        circulatingSupply: 68000000000,
        chartImage: tetherchart,
    },
    
    {
        id: 'xrp',
        name: 'XRP',
        symbol: 'XRP',
        logo: xrp,
        price: 0.5,
        change1h: -0.1,
        change24h: -3.0,
        change7d: 2.0,
        marketCap: 25000000000,
        volume24h: 1000000000,
        data: "50.00B XRP",
        circulatingSupply: 50000000000,
        chartImage: xrpchart,
    },
    {
        id: 'bnb',
        name: 'BNB',
        symbol: 'BNB',
        logo: bnb,
        price: 300,
        change1h: -0.5,
        change24h: 1.0,
        change7d: 3.5,
        marketCap: 45000000000,
        volume24h: 1500000000,
        data: "150.00M BNB",
        circulatingSupply: 160000000,
        chartImage: bnbchart,
    },
    {
        id: 'sol',
        name: 'Solana',
        symbol: 'SOL',
        logo: solana,
        price: 30,
        change1h: 0.3,
        change24h: -1.0,
        change7d: 5.0,
        marketCap: 10000000000,
        volume24h: 500000000,
        data: "350.00M SOL",
        circulatingSupply: 350000000,
        chartImage: solanachart,
    },
];

    
    
    

export default sampleData;