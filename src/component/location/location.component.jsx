import React, { useContext } from "react";

import './location.styles.scss';

import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineClose } from 'react-icons/ai';
import { TiLocationArrow } from 'react-icons/ti';
import { LocationContext } from '../../providers/location/location.provider';

const Location = () => {
    const{toggleHidden} = useContext(LocationContext)
    return (
        <div className="flex-col mt-20 ml-[50rem] h-[45rem] w-[35rem] bg-white border-black rounded-xl fixed location-component">
            <div className="flex">
                <AiOutlineClose className="h-6 w-6 ml-2 mt-2 cursor-pointer" onClick={toggleHidden} />
                <span className="text-2xl font-semibold mt-2 ml-40">Choose address</span>
            </div>

            <div className="w-96 h-4 relative mt-4">
                <input
                    type='search'
                    placeholder="Add a new address"
                    className='w-[34rem] h-10 ml-2 absolute rounded-xl'
                />
                <div className="absolute ml-[32rem] mt-2 decoration-gray-500">
                    <SearchIcon />
                </div>

            </div>

            <div className="flex mt-20 ml-4">
                <TiLocationArrow  className="h-6 w-6"/>
                <p className="mt-[0.3rem]">Use current location</p>
            </div>

        </div>
    )
};

export default Location;