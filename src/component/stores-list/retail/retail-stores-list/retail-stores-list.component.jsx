import React, { useState } from "react";

import './retail-stores-list.styles.scss';

import RetailStore from '../retail-stores/retail-stores.component';

import RETAIL_STORE_DATA from '../retail.data';

const RetailStoresList = () => {
    const [stores] = useState(RETAIL_STORE_DATA);
    return (
        <div className="retail-storeslist">
         <h2>Retail stores in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<RetailStore key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default RetailStoresList;