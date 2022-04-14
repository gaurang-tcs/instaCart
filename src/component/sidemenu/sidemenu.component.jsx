import React from "react";

import './sidemenu.styles.scss';

import { AiFillShop } from 'react-icons/ai';
import { AiTwotoneTag } from 'react-icons/ai';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { MdFavorite } from 'react-icons/md';
import { IoIosBookmarks } from 'react-icons/io';

const SideMenu = () => {
    return (
        <div className="sidemenu">
            <div className="side-header">
                <img src='https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' alt='icon' />

                <h4>Sprouts Farmers Market</h4>

                <div className="everyday">
                    <span className="prices">Everyday store prices</span>
                    <div className='arrow'>&#10095;</div>
                </div>
                <div className="satisfaction">
                    <img src='https://i.postimg.cc/3RyHRysf/correct-2.jpg' alt="icon" />
                    <span className="gurantee">100% satisfaction gurantee</span>
                    <div className='arrow'>&#10095;</div>
                </div>
            </div>

            <div className='side-center'>
                <div className='center-details'>
                    <AiFillShop className='icon' />
                    <span className="detail-name">Shop</span>
                </div>

                <div className='center-details'>
                    <AiTwotoneTag className='icon' />
                    <span className="detail-name">Deals</span>
                </div>

                <div className='center-details'>
                    <GiAnticlockwiseRotation className='icon' />
                    <span className="detail-name">Buy it again</span>
                </div>

                <div className='center-details'>
                    <MdFavorite className='icon' />
                    <span className="detail-name">Favorites</span>
                </div>

                <div className='center-details'>
                    <IoIosBookmarks className='icon' />
                    <span className="detail-name">Recipes</span>
                </div>
            </div>

            <div className="side-footer">
                <div className="footer-details">
                    <span className="footer-list">Produce</span>
                    <span className="footer-list">Dairy & Eggs</span>
                    <span className="footer-list">Baverages</span>
                    <span className="footer-list">Meat & Seafood</span>
                    <span className="footer-list">Snacks & Candy</span>
                    <span className="footer-list">Frozen</span>
                    <span className="footer-list">Bakery</span>
                    <span className="footer-list">Dry Goods & Pasta</span>
                    <span className="footer-list">Condiments & Sauces</span>
                    <span className="footer-list">Canned Goods & Soups</span>
                    <span className="footer-list">Breakfast</span>
                    <span className="footer-list">Household</span>
                    <span className="footer-list">Baking Essentials</span>
                </div>

            </div>
        </div>
    )
};

export default SideMenu;