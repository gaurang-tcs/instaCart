import React, { useState } from "react";

import './more-stores-list.styles.scss';

import MoreStores from '../more-stores/more-stores.component';

import MORE_STORE_DATA from '../more-stores-data';

const MoreStoresList = () => {
    const [stores] = useState(MORE_STORE_DATA);
    return (
        <div className="more-storeslist">
         <h2>More stores in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<MoreStores key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default MoreStoresList;