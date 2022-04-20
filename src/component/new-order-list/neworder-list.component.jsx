import React, { useState } from "react";
import NewOrder from "../new-order/neworder.component";

import Carousel from 'react-elastic-carousel';

import NEW_ORDER_DATA from '../../data/new-order-data';

const NewOrderList = () => {
    const [neworder] = useState(NEW_ORDER_DATA);


    const breakPoints = [
        {width:1, itemsToShow:8}
      ];

    return (
        <div className='flex-col w-full'>
            <div className='decoration-slate-800 font-semibold text-2xl ml-[3.7rem]'>Start a new order</div>
                <div className="mt-4">
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