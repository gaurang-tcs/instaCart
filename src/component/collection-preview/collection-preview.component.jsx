import React from "react";

import './collection-preview.styles.scss';

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ list }) => {
    const {title, stores} = list;
    return(
        <div className="collection-preview">
          <h2>{title}</h2>
            <div className="collection-list">
                {
                    stores.map((store) => (<CollectionItem key={store.id} store={store} />))
                }
            </div>

        </div>
    )
};

export default CollectionPreview;