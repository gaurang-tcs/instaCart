import React, { useState } from "react";

import './neighborhood-stores-list.styles.scss';

import NEIGHBORHOOD_STORES_DATA from '../neighborhood-data';

import NeighborhoodStores from '../neighborhood-favorites-stores/neighborhood-stores.component';


const NeighborhoodStoresList = () => {
    const [stores] = useState(NEIGHBORHOOD_STORES_DATA);
    return (
        <div className="neighborhood-storeslist">
         <h2>Neighborhood favorites in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<NeighborhoodStores key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default NeighborhoodStoresList;