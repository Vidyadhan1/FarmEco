import React from 'react'
import "./MarketplaceHeader.css"
import { Link } from "react-router-dom";

export default function MarketplaceHeader() {
  return (
    <>
    <div className="row marketplaceheader ">
       
    <div className="login-card admin-card">
          <h2>Sell Waste</h2>
          <p>Sell Your waste in open Market</p>
          <button className="login-btn">
            <Link to="/custheader/marketplacesell">Sell</Link>
          </button>
        </div>
        <div className="login-card admin-card">
          <h2>Buy Waste</h2>
          <p>Buy waste from open Market.</p>
          <button className="login-btn">
            <Link to="/custheader/marketplacebuy">Buy</Link>
          </button>
        </div>
    </div>

    </>
    
  )
}
