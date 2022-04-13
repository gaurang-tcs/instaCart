import React, { useState } from "react";

import './bulk-stores-list.styles.scss';

import BulkStores from '../bulk-stores/bulk-stores.component';

import BULK_STORE_DATA from '../bulk-data';

const BulkStoresList = () => {
    const [stores] = useState(BULK_STORE_DATA);
    return (
        <div className="bulk-storeslist">
         <h2>Bulk stores in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<BulkStores key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default BulkStoresList;