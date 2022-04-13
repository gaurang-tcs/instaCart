import React from "react";

import './neighborhood-stores.styles.scss';

const NeighborhoodStores = ({ stores }) => {
    const { icon, name, items, delivery, pickup, prices, time } = stores;
    return (
        <div className="neighborhood-stores">
            <img src={`${icon}`} alt='icon' />
            <div className="details">
                <span className="name">{name}</span>
                <span className="items">{items}</span>
                <span className="delivery">{delivery}</span>
                <span className="pick-up">{pickup}</span>
                <span className="prices">{prices}</span>
                <span className="time">{time}</span>
            </div>
        </div>
    )
};

export default NeighborhoodStores;