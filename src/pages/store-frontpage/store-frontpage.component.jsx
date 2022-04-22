import React, {useState, useEffect} from "react";
import ItemOverview from "../../component/item-overview/item-overview.component";

import SideMenu from "../../component/sidemenu/sidemenu.component";
import StoreFrontHeader from '../../component/store-front-header/storefront-header.component';
import Loader from "../../component/loader/loader.component";

import ITEM_DATA from "../../data/Itemdata";

const StoreFrontPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const lists = ITEM_DATA;

    // const [activeFilter , setActiveFilter] = useState('')
    // // let outputList = lists;
    // let outputList;
    // switch(activeFilter){
    //     case 'Produce' :
    //         outputList = lists.map( item => { return item.category === activeFilter } )
    //     default: 
    //         outputList = lists
    // }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000)
    }, [])

    return (
        <div>
            {!isLoading && (<div className="flex-col">
                <StoreFrontHeader />
                <div className="flex">
                    <SideMenu/>
                    <ItemOverview lists={lists} />
                </div>
            </div>)}
            {isLoading && <div><Loader /></div>}
        </div>
    )
};

export default StoreFrontPage;