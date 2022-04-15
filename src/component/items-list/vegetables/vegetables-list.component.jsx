import React, { useState } from "react";

import './vegetables-list.styles.scss';

import VEGETABLE_DATA from './vegetable-data';
import Item from "../../item/item.component";

import Carousel from 'react-elastic-carousel';

import './carousel-vegetables.styles.css';


const VegetablesList = () => {
    const [items] = useState(VEGETABLE_DATA);

    const breakPoints = [
        { width: 1, itemsToShow: 8 }
    ];
    return (
        <div className="vegetableslist">
            <h2>Fresh Vegetables</h2>
            <div className='list'>
                <Carousel breakPoints={breakPoints} >
                    {
                        items.map((item) => (<Item key={item.id} item={item} />))
                    }
                </Carousel>
            </div>
        </div>
    )
};

export default VegetablesList;