import React from "react";
import ItemPreview from "../item-preview/item-preview.component";

const ItemOverview = ({lists}) => {
   
    return (
        <div className="flex-col w-[86%] mt-16 ml-64">
            {
                lists.map((list) => <ItemPreview key={list.id} list={list} />)
            }
        </div>
    )
};

export default ItemOverview;