import React, { useState } from "react";

import './neighborhood-stores-list.styles.scss';

import NEIGHBORHOOD_STORES_DATA from '../neighborhood-data';

import Store from '../../../store/store.component';


const NeighborhoodStoresList = () => {
    const [stores] = useState(NEIGHBORHOOD_STORES_DATA);
    return (
        <div className="neighborhood-storeslist">
         <h2>Neighborhood favorites in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default NeighborhoodStoresList;