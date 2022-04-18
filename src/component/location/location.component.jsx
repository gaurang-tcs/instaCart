import React, { useContext } from "react";

import './location.styles.scss';

import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineClose } from 'react-icons/ai';
import { TiLocationArrow } from 'react-icons/ti';
import { LocationContext } from '../../providers/location/location.provider';

const Location = () => {
    const{toggleHidden} = useContext(LocationContext)
    return (
        <div className="location-component">
            <div className="location-header">
                <AiOutlineClose className="location-close" onClick={toggleHidden} />
                <span className="l-title">Choose address</span>
            </div>

            <div className="search">
                <input
                    type='search'
                    placeholder="Add a new address"
                    className='input-search'
                />
                <div className="search-icon">
                    <SearchIcon />
                </div>

            </div>

            <div className="current">
                <TiLocationArrow  className="location-icon"/>
                <span className="current-location">Use current location</span>
            </div>

        </div>
    )
};

export default Location;