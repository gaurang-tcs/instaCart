import React from 'react';
import './header.styles.scss';
import SearchIcon from '@mui/icons-material/Search';
import { IoLocationSharp } from 'react-icons/io5';
import CartDrawer from '../cartdrawer/cartdrawer.component';

const Header = () => {
    return (
        <div className='header'>
            <img src='https://www.instacart.com/image-server/120x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png' alt='app-name' />

            <div className="search">
                <input
                    type='search'
                    placeholder="Search products, stores, and recipes"
                    className='input-search'
                />
                <div className="search-icon">
                    <SearchIcon />
                </div>

            </div>

            <div className='location' >
                <IoLocationSharp className='icon' />
                <span className='count'>94105</span>
            </div>

            <CartDrawer/>

        </div>
    )
};

export default Header;
