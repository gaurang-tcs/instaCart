import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

//import Divider from '@mui/material/Divider';

import CartItemList from '../cartitem-list/cartitem-list.component';
import CheckoutButton from '../checkout-button/checkoutbutton.component';
import { CartContext } from '../../providers/cart/cart.provider';

import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import './cartdrawer.styles.scss';


const CartDrawer = () => {
    const { CartItemsCount } = useContext(CartContext);
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => {

        return (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
                role="presentation"
                //onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <div className='close-button'  onClick={toggleDrawer(anchor, false)}>
                    <AiOutlineClose className='close-icon' />
                    <button className='close'>Close</button>
                </div>
                <div className='cartlist'>
                    <CartItemList />
                    <CheckoutButton />
                </div>
            </Box>
        )
    };

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className='out-drawer'>
                        <div className='cart-icon' onClick={toggleDrawer(anchor, true)}>
                            <FaShoppingCart className='icon' />
                            <span className='count'>{CartItemsCount}</span>
                        </div>
                    </div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
export default CartDrawer;