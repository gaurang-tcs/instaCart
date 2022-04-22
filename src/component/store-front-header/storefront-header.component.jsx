import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IoLocationSharp } from 'react-icons/io5';
import CartDrawer from '../cartdrawer/cartdrawer.component';
import { LocationContext } from '../../providers/location/location.provider';
import { MdDeliveryDining } from 'react-icons/md';
import { GiCardPickup } from 'react-icons/gi'
import {AiFillClockCircle} from 'react-icons/ai';

const StoreFrontHeader = () => {
    const { toggleHidden } = useContext(LocationContext);
    return (
        <div className='fixed h-auto flex ml-12 w-full z-20 cursor-pointer bg-white'>
            <img src='https://www.instacart.com/image-server/120x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png' alt='app-name'
                className='mt-4 px-4 py-3 w-36 h-12'
            />

            <div className="flex relative ml-16 mt-4 w-[60%]">
                <input
                    type='search'
                    placeholder="Search Sprouts Farmers Market..."
                    className='w-full h-7 decoration-slate-700 bg-white py-6 border-hidden rounded-lg font-semibold '
                />
                <div className="absolute mt-2.5 ml-[55rem]">
                    <SearchIcon />
                </div>

            </div>

            <div className='flex w-24 mt-6 h-10'>
                <div className='flex border-[2px] border-black rounded-[25px] p-2 -mt-2'>
                    <MdDeliveryDining className='h-7 w-7' />
                    <p className='text-[0.9rem] decoration-slate-[#343538] ml-2 mt-1 font-semibold'>Delivery</p>
                </div>

                <div className='flex ml-2'>
                    <GiCardPickup className='h-7 w-7'/>
                    <p className='text-[0.9rem] decoration-slate-[#343538] ml-2 mt-1 font-semibold'>Pickup</p>
                </div>
            </div>

            <div className='flex w-40 mt-4 ml-32' onClick={toggleHidden} >
                <IoLocationSharp className='h-6 w-6 mt-[0.6rem] ml-4' />
                <span className='mt-[0.7rem] ml-4 decoration-slate-[#343538] text-[0.9rem] font-semibold'>94105</span>
            </div>

            <div className='flex w-80 mt-4'>
                <AiFillClockCircle className='h-6 w-6 mt-[0.6rem] ml-4' />
                <p className='mt-[0.7rem] ml-4 decoration-slate-[#343538] text-[0.9rem] font-semibold'>Today, 8am - 10am</p>
            </div>

            <CartDrawer />

        </div>
    )
};

export default StoreFrontHeader;
