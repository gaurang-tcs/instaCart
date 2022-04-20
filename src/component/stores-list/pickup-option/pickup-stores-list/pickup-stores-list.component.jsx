import React, { useState } from "react";
import Store from '../../../store/store.component';

import PICKUP_STORES_DATA from '../pickup-data';

const PickupStoresList = () => {
    const [stores] = useState(PICKUP_STORES_DATA);
    return (
        <div className="flex-col">
         <div className="decoration-slate-800 font-semibold text-2xl">Pickup options in San Francisco</div>
            <div className="grid grid-cols-3 mt-4">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default PickupStoresList;