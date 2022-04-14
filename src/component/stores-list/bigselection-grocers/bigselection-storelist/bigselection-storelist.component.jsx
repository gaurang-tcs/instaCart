import React, { useState } from "react";

import './bigselection-storelist.styles.scss';

import BIG_SELECTION_GROCER_DATA from "../bigselection-grocers-data";

import Store from "../../../store/store.component";

const BigSelectionStoreList = () => {
    const [stores] = useState(BIG_SELECTION_GROCER_DATA);
    return (
        <div className="bigselection-storelist">
         <h2>Big-selection grocers in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default BigSelectionStoreList;