import React, { useState } from "react";

import './wine-stores-list.styles.scss';

import WineStores from '../wine-stores/wine-stores.component'

import WINE_STORES_DATA from '../wine-data';

const WineStoresList = () => {
    const [stores] = useState(WINE_STORES_DATA);
    return (
        <div className="wine-storeslist">
         <h2>Wine,beer, and spirits in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<WineStores key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default WineStoresList;