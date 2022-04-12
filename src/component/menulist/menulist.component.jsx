import React, { useState } from "react";

import './menulist.styles.scss';

import MENU_DATA from '../../data/menudata';

import Carousel from 'react-elastic-carousel';

import Menu from "../menu/menu.component";

import './carousel.styles.css';

const MenuList = () => {
    const [menu] = useState(MENU_DATA);

    const breakPoints = [
        {width:1, itemsToShow:10}
      ];

    return (
        <div className="menu-list">
            <Carousel breakPoints={breakPoints} >
            {
                menu.map((menu) => (<Menu key={menu.id} menu={menu} />))
            }
            </Carousel>
        </div>
    )
}

export default MenuList;