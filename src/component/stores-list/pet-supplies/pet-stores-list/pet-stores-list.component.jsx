import React, { useState } from "react";

import './pet-stores-list.styles.scss';

import PetStores from '../pet-stores/pet-stores.component';

import PET_STORE_DATA from '../pet-stores-data';

const PetStoresList = () => {
    const [stores] = useState(PET_STORE_DATA);
    return (
        <div className="pet-storeslist">
         <h2>Pet supplies in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<PetStores key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default PetStoresList;