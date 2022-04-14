import React, { useState } from "react";

import './more-stores-list.styles.scss';

import Store from '../../../store/store.component';

import MORE_STORE_DATA from '../more-stores-data';

const MoreStoresList = () => {
    const [stores] = useState(MORE_STORE_DATA);
    return (
        <div className="more-storeslist">
         <h2>More stores in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default MoreStoresList;