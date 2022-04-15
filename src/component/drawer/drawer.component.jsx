import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import './drawer.styles.scss';

import { FiMenu } from 'react-icons/fi';
import { FaReceipt } from 'react-icons/fa';
import { IoIosBookmarks, IoMdHome } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { CgDollar } from 'react-icons/cg';
import { AiFillGift, AiFillTag, AiFillBulb } from 'react-icons/ai';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';


const SideBar = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 275 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >

        <div className='timing'>
            <p>Instacart Customer since April 2022</p>
        </div>

        <div className='free-trial'>
            <h4>Start your free trial today!</h4>
            <p className='cancel'>You can cancel at any time.</p>

            <span className='express'>Try Express for free</span>
        </div>

        <Divider />

            <div className='drawer-details'>
                <div className='details'>
                    <IoMdHome className='icon' />
                    <span className='name'>Stores</span>
                </div>

                <div className='details'>
                    <FaReceipt className='icon' />
                    <span className='name'>Your orders</span>
                </div>

                <div className='details'>
                    <IoIosBookmarks className='icon' />
                    <span className='name'>Your recipes</span>
                </div>

                <div className='details'>
                    <IoSettingsSharp className='icon' />
                    <span className='name'>Your account settings</span>
                </div>

                <div className='details'>
                    <img src='https://www.instacart.com/image-server/24x24/www.instacart.com/assets/express/badges/bolt-gold@3x-ff5fe97de1da8afe6518f47d53c33500e4938cbe67af5ab413a3e40a64e36ade.png' alt='icon' />
                    <span className='name'>Try Instacart Express</span>
                </div>

                <div className='heading'>
                    <span>Credits and Promos</span>
                </div>

                <div className='details'>
                    <CgDollar className='icon' />
                    <span className='name'>Invite friends, get $1000</span>
                </div>

                <div className='details'>
                    <AiFillGift className='icon' />
                    <span className='name'>Buy gift cards</span>
                </div>

                <div className='details'>
                    <AiFillTag className='icon' />
                    <span className='name'>Add Promo or Gift Card</span>
                </div>

                <div className='heading'>
                    <span>Support</span>
                </div>

                <div className='details'>
                    <RiCustomerServiceFill className='icon' />
                    <span className='name'>Help center</span>
                </div>

                <div className='details'>
                    <AiFillBulb className='icon' />
                    <span className='name'>How Instacart works</span>
                </div>

                <div className='details'>
                    <MdOutlineLogout className='icon' />
                    <span className='name'>Log out</span>
                </div>

            </div>

        </Box>
    );

    return (
        <div className='drawer'>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className='out-drawer'>
                        <FiMenu className='drawer-icon' onClick={toggleDrawer(anchor, true)} />
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

export default SideBar;