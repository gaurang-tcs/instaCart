import React, { useState } from "react";

import './pickup-stores-list.styles.scss';

import Store from '../../../store/store.component';

import PICKUP_STORES_DATA from '../pickup-data';

const PickupStoresList = () => {
    const [stores] = useState(PICKUP_STORES_DATA);
    return (
        <div className="pickup-storeslist">
         <h2>Pickup options in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default PickupStoresList;