import React , {useState} from "react";

import './collection-overview.styles.scss';

import MAIN_DATA from "../../data/maindata";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = () => {
    const [lists] = useState(MAIN_DATA);
    return(
        <div className="collection-overview">
            {
                lists.map((list) => (<CollectionPreview key={list.id} list={list} />))
            }
        </div>
    )
};

export default CollectionOverview;