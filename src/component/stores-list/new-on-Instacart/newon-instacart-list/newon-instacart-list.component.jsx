import React, { useState } from "react";

import './newon-instacart-list.styles.scss';

import NEW_ON_INSTACART_DATA from "../newon-instacart-data";

import Store from '../../../store/store.component';

const NewOnInstacartList = () => {
    const [stores] = useState(NEW_ON_INSTACART_DATA);
    return (
        <div className="newon-instacart-list">
         <h2>New on Instacart in San Francisco</h2>
            <div className="list">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default NewOnInstacartList;