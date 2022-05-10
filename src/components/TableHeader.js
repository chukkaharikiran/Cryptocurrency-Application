import React from "react";
import "./Coin.css"

export const TableHeader = () => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className="coin-rank">
          <h3>#</h3>
        </div>
        <div className='coin'>
          <h3>Name</h3>
        </div>
        <div className='coin-data'>
          <h3 className='coin-price'>Price</h3>
          <h3 className='coin-percent'>24%</h3>
          <h3 className='coin-high'>High(24h)</h3>
          <h3 className='coin-low'>Low(24h) </h3>
          <h3 className='coin-volume'>Volume(24h)</h3>
          <h3 className='coin-marketcap'>Market Cap</h3>
        </div>
      </div>
    </div>
  )
}
