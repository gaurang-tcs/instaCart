import React, { useState } from "react";

import './organic-stores-list.styles.scss';

import Store from '../../../store/store.component';

import ORGANIC_STORES_DATA from '../organic-data';

const OrganicStoresList = () => {
    const [stores] = useState(ORGANIC_STORES_DATA);
    return (
        <div className="best-storeslist">
         <h2>Natural and Organic stores in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default OrganicStoresList;