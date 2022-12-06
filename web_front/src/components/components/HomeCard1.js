import React, { memo, useEffect, useState } from 'react';


//react functional component
const HomeCard1 = () => {

    return (
        <div className="container">
            <section className="main-card">
                <div className="image-container">
                    <img src="./img/home/image-equilibrium.jpg" alt="nft" className="main-image"/>
                    <div className="overlay"></div>
                    <img src="./img/home/icon-view.svg" alt="view icon" className="view"/>
                </div>
            <div className="text-container">
                <h1 className="card_title">Equilibrium #3429</h1>
                <p className="description">Our Equilibrium collection promotes balance and calm.</p>
                <div className="eth-info">
                <div className="info">
                    <img src="./img/home/icon-ethereum.svg" alt="ETH" className="icon"/><span className="eth">0.041 ETH</span>
                </div>
                <div className="info">
                    <img src="./img/home/icon-clock.svg" alt="clock" className="icon"/><span>3 days left</span>
                </div>
                </div>
                
            </div>
            </section>
        </div>
            
    );
};

export default HomeCard1;