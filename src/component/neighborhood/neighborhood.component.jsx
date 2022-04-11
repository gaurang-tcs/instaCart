import React from "react";

import './neighborhood.styles.scss';

const Neighborhood = ({ neighborhood }) => {
    const { name, imgUrl } = neighborhood;
    return (
        <div className="neighborhood">
            <img src={`${imgUrl}`} alt='icon' />
            <span className="name">{name}</span>
        </div>
    )
};

export default Neighborhood;