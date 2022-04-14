import React, { useState } from "react";

import './convenience-stores-list.styles.scss';

import Store from '../../../store/store.component';
import CONVENIENCE_STORES_DATA from '../convenience-data';

const ConvenienceStoresList = () => {
    const [stores] = useState( CONVENIENCE_STORES_DATA);
    return (
        <div className="convenience-storeslist">
         <h2>Convenience stores in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default ConvenienceStoresList;