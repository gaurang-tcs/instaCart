import React, { useState } from "react";

import NEIGHBORHOOD_STORES_DATA from '../neighborhood-data';

import Store from '../../../store/store.component';


const NeighborhoodStoresList = () => {
    const [stores] = useState(NEIGHBORHOOD_STORES_DATA);
    return (
        <div className="flex-col">
         <div className="decoration-slate-800 font-semibold text-2xl">Neighborhood favorites in San Francisco</div>
            <div className="grid grid-cols-3 mt-4">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default NeighborhoodStoresList;