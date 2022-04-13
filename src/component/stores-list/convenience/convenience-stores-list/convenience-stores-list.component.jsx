import React, { useState } from "react";

import './convenience-stores-list.styles.scss';

import ConvenienceStores from '../convenience-stores/convenience-stores.component';

import CONVENIENCE_STORES_DATA from '../convenience-data';

const ConvenienceStoresList = () => {
    const [stores] = useState( CONVENIENCE_STORES_DATA);
    return (
        <div className="convenience-storeslist">
         <h2>Convenience stores in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<ConvenienceStores key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default ConvenienceStoresList;