import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './components/Coin';
import { TableHeader } from './components/TableHeader';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  //fetching the cryptocurrency data from CoinGecko API
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  //filtering the cryptocurrency based on the search
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Cryptocurrency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search a currency'
          />
        </form>
      </div>
      <TableHeader />
      {/* displays coin component based on the filtered coins */}
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            rank={coin.market_cap_rank}
            image={coin.image}
            symbol={coin.symbol}
            name={coin.name}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            high={coin.high_24h}
            low={coin.low_24h}
            volume={coin.total_volume}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
