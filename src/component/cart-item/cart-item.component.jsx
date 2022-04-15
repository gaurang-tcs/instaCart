import React from "react";

import './cart-item.styles.scss';

const CartItem = ({ item }) => {
    const { icon, cartprice, name, quantity } = item;
    return (
        <div className="cartitem">
            <img src={icon} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>

                <div className="quantity-price">
                    <span className='quantity'>
                        {quantity}
                    </span>
                    <span className="cartprice">
                        ${cartprice}
                    </span>
                </div>

            </div>
        </div>
    )
};

export default CartItem;