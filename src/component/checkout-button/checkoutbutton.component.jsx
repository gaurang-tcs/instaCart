import React, {useContext} from "react";

import './checkoutbutton.styles.scss'

import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutButton = () => {
    const{ cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-total'>
            <span className='checkout'>Checkout</span>
            <span className='total'>${cartTotal}</span>
        </div>
    )
};

export default CheckoutButton;