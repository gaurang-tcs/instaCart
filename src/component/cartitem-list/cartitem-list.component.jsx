import React, {useContext} from "react";

import { CartContext } from '../../providers/cart/cart.provider';

import CartItem from "../cart-item/cart-item.component";

import './cartitem-list.styles.scss';

const CartItemList = () => {
    const { cartItems } = useContext(CartContext);

    return(
        <div className="cartitem-list">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
    )
};

export default CartItemList;


