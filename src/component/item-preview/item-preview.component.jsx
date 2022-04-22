import React, { useState } from "react";

import FruitsList from "../items-list/fruits/fruits-list.component";
import VegetablesList from '../items-list/vegetables/vegetables-list.component';

//import SearchIcon from '@mui/icons-material/Search';

//import VEGETABLE_DATA from "../items-list/vegetables/vegetable-data";

const ItemPreview = () => {
    //const [filters, setFilters] = useState({});
    //const [items] = useState(VEGETABLE_DATA);

    // const filteredItems = items.filter(item =>
    //     item.name.toLowerCase().includes(filters.toLowerCase())
     
    //    )

    // const filterData = (data) => {
    //     const filteredData = [];

    //     if(!filters.name) {
    //         return data;
    //     }

    //     for (const item of data) {
    //         if (filters.name !== '' && item.name !== filters.name) {
    //             continue
    //         }
    //         filteredData.push(item);
    //     }
    //     return filteredData;
    // }

    return (
        <div className="flex-col w-[86%] mt-24 ml-64 overflow-y-auto"> 
            <VegetablesList />
            <FruitsList />
        </div>
    )
};

export default ItemPreview;