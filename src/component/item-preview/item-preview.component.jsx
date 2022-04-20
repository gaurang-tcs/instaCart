import React from "react";

import FruitsList from "../items-list/fruits/fruits-list.component";
import VegetablesList from '../items-list/vegetables/vegetables-list.component';

const ItemPreview = () => {
    return(
        <div className="flex-col w-[86%] mt-24 ml-64 overflow-y-auto">
            <VegetablesList />   
            <FruitsList />
        </div>
    )
};

export default ItemPreview;