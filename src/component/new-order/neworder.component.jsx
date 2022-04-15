import React from "react";

import { Link } from "react-router-dom";

import './neworder.styles.scss';

const NewOrder = ({ neworder }) => {
    const { icon, name, status } = neworder;
    return (
        <Link className="new-order" to='/storefront'>
            <img src={`${icon}`} alt='icon' />
            <span className="name">{name}</span>
            <span className="status">{status}</span>
        </Link>
    )
};

export default NewOrder;