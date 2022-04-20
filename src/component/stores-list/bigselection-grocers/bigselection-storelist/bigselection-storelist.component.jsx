import React, { useState } from "react";

import BIG_SELECTION_GROCER_DATA from "../bigselection-grocers-data";

import Store from "../../../store/store.component";

const BigSelectionStoreList = () => {
    const [stores] = useState(BIG_SELECTION_GROCER_DATA);
    return (
        <div className="flex-col">
         <div className="decoration-slate-800 font-semibold text-2xl">Big-selection grocers in San Francisco</div>
            <div className="grid grid-cols-3 mt-4">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default BigSelectionStoreList;