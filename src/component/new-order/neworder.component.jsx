import React from "react";

import './neworder.styles.scss';

const NewOrder = ({ neworder }) => {
    const { icon, name, status } = neworder;
    return (
        <div className="new-order">
            <img src={`${icon}`} alt='icon' />
            <span className="name">{name}</span>
            <span className="status">{status}</span>
        </div>
    )
};

export default NewOrder;