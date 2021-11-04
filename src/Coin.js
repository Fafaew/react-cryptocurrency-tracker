import React from 'react'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <div className='coin-container'>
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="class-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="pcoin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-perct red">{priceChange.toFixed(2)}%</p>
          ) : (<p className="coin-perct green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>

        </div>
      </div>      
    </div>
  )
}

export default Coin
