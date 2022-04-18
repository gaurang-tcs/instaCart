import React, { useState, useContext } from "react";

import './cart-item.styles.scss';

import { CartContext } from "../../providers/cart/cart.provider";

import { GrAdd } from 'react-icons/gr';
import { IoIosRemove } from 'react-icons/io';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';


const CartItem = ({ item }) => {
    const { icon, cartprice, name, quantity, weight} = item;
    const [isHovering, setIsHovering] = useState(false);
    const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

    const handleMouseEnter = () => {
        setIsHovering(true)

    }

    const handleMouseRemove = () => {
        setIsHovering(false)
    }
    return (
        <div className="cartitem">
            <img src={icon} alt='item' />

            <div className='item-details'>

                <div className="general-details">
                    <span className='name'>{name}</span>
                    <span className='weight'>{weight}</span>

                    <div className="preference-remove">
                        <div className="preference">
                            <BiPencil className="icon" />
                            <span className="text">Preference</span>
                        </div>
                        
                        <div className="preference" onClick={() => clearItemFromCart(item)}>
                            <RiDeleteBin5Line className="icon" />
                            <span className="text">Remove</span>
                        </div>
                    </div>
                </div>


                <div className="quantity-price">
                    <span className='quantity' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseRemove}>
                        {quantity}
                    </span>
                    <div className={`${isHovering ? "quantity-button" : "hidden"}`}>
                        <IoIosRemove className="button" onClick={() => removeItem(item)} />
                        {quantity}
                        <GrAdd className="button" onClick={() => addItem(item)} />
                    </div>
                    <span className="cartprice">
                        ${cartprice}
                    </span>
                </div>

            </div>
        </div>
    )
};

export default CartItem;