import React, { useState } from "react";
import NewOrder from "../new-order/neworder.component";

import Carousel from 'react-elastic-carousel';

import NEW_ORDER_DATA from '../../data/new-order-data';
import './neworder-list.styles.scss';

const NewOrderList = () => {
    const [neworder] = useState(NEW_ORDER_DATA);


    const breakPoints = [
        {width:1, itemsToShow:8}
      ];

    return (
        <div className='new-order-list'>
            <h2>Start a new order</h2>
                <div className="list">
                <Carousel breakPoints={breakPoints} >
                    {
                        neworder.map((neworder) => (<NewOrder key={neworder.id} neworder={neworder} />))
                    }
                    </Carousel>
                </div>
            
        </div>
    )
};

export default NewOrderList;