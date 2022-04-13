import React, { useState } from "react";

import './pickup-stores-list.styles.scss';

import PickupStores from '../pickup-stores/pickup-stores.component';

import PICKUP_STORES_DATA from '../pickup-data';

const PickupStoresList = () => {
    const [stores] = useState(PICKUP_STORES_DATA);
    return (
        <div className="pickup-storeslist">
         <h2>Pickup options in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<PickupStores key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default PickupStoresList;