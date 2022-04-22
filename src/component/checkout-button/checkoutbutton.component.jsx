import React, {useContext} from "react";

import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutButton = () => {
    const{ cartTotal } = useContext(CartContext);

    return (
        <div className='flex mt-2 w-[30rem] h-[3.5rem] ml-2 justify-center fixed text-white bg-green-600 font-semibold p-2 cursor-pointer'>
            <span className='text-2xl fixed mt-[0.3rem]'>Checkout</span>
            <span className='text-base ml-[25rem] border-gray-600 p-[0.5rem] bg-green-800'>${cartTotal.toFixed(2)}</span>
        </div>
    )
};

export default CheckoutButton;