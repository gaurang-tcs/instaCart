import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IoLocationSharp } from 'react-icons/io5';
import CartDrawer from '../cartdrawer/cartdrawer.component';
import {LocationContext} from '../../providers/location/location.provider';

const Header = () => {
    const{ toggleHidden } = useContext(LocationContext);
    return (
        <div className='fixed h-auto flex ml-12 w-full z-20 cursor-pointer bg-white'>
            <img src='https://www.instacart.com/image-server/120x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png' alt='app-name'
                className='mt-4 px-4 py-3 w-36 h-12'
            />

            <div className="flex relative ml-16 mt-4 w-3/4">
                <input
                    type='search'
                    placeholder="Search products, stores, and recipes"
                    className='w-full h-7 decoration-slate-700 bg-white py-6 border-hidden rounded-lg font-semibold '
                />
                <div className="absolute mt-2.5 left-[94%]">
                    <SearchIcon />
                </div>

            </div>

            <div className='flex w-40 mt-4' onClick={toggleHidden} >
                <IoLocationSharp className='h-6 w-6 mt-[0.6rem] ml-4' />
                <span className='mt-[0.7rem] ml-4 decoration-slate-[#343538] text-[0.9rem] font-semibold'>94105</span>
            </div>

            <CartDrawer />

        </div>
    )
};

export default Header;
