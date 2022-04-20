import React, { useState } from "react";

import Store from '../../../store/store.component';

import BULK_STORE_DATA from '../bulk-data';

const BulkStoresList = () => {
    const [stores] = useState(BULK_STORE_DATA);
    return (
        <div className="flex-col">
        <div className="decoration-slate-800 font-semibold text-2xl">Bulk stores for bargains in San Francisco</div>
            <div className="grid grid-cols-3 mt-4">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default BulkStoresList;