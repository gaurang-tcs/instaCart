import React, { useState } from "react";

import './vegetables-list.styles.scss';

import VEGETABLE_DATA from './vegetable-data';
import Item from "../../item/item.component";

const VegetablesList = () => {
    const [items] = useState(VEGETABLE_DATA);
    return (
        <div className="vegetableslist">
            <h2>Fresh Vegetables</h2>
            <div className='list'>
                {
                    items.map((items) => (<Item key={items.id} items={items} />))
                }
            </div>
        </div>
    )
};

export default VegetablesList;