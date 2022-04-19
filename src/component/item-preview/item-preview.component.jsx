import React from "react";

import FruitsList from "../items-list/fruits/fruits-list.component";
import VegetablesList from '../items-list/vegetables/vegetables-list.component';

import './item-preview.styles.scss'

const ItemPreview = () => {
    return(
        <div className="item-preview">
            <VegetablesList />   
            <FruitsList />
        </div>
    )
};

export default ItemPreview;