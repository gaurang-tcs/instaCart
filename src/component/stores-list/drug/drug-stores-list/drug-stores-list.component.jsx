import React, { useState } from "react";

import './drug-stores-list.styles.scss';

import Store from '../../../store/store.component';

import DRUG_STORES_DATA from '../drug-data';

const DrugStoresList = () => {
    const [stores] = useState(DRUG_STORES_DATA);
    return (
        <div className="drug-storeslist">
         <h2>Drugstores in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default DrugStoresList;