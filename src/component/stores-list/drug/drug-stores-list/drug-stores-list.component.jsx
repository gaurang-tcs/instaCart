import React, { useState } from "react";
import Store from '../../../store/store.component';

import DRUG_STORES_DATA from '../drug-data';

const DrugStoresList = () => {
    const [stores] = useState(DRUG_STORES_DATA);
    return (
        <div className="flex-col">
        <div className="decoration-slate-800 font-semibold text-2xl">Drugstores in San Francisco</div>
            <div className="grid grid-cols-3 mt-4">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default DrugStoresList;