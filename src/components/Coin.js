import React from 'react';
import './Coin.css';

const Coin = ({
  rank,
  image,
  symbol,
  name,
  price,
  priceChange,
  high,
  low,
  volume,
  marketcap
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className="coin-rank">
          <p>{rank}</p>
        </div>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <p className='coin-symbol'>{symbol}</p>
          <h1>{name}</h1>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{Number(priceChange).toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{Number(priceChange).toFixed(2)}%</p>
          )}
          <p className='coin-high'>${high}</p>
          <p className='coin-low'>${low}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>
          <p className='coin-marketcap'>${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
