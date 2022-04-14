import React from "react";

import VegetablesList from '../items-list/vegetables/vegetables-list.component';

import './item-preview.styles.scss'

const ItemPreview = () => {
    return(
        <div className="item-preview">
            <VegetablesList />   
        </div>
    )
};

export default ItemPreview;