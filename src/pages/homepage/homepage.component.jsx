import React from "react";

import './homepage.styles.scss';

import MenuList  from "../../component/menulist/menulist.component";
import Offer from "../../component/offer/offer.component";
import NeighborhoodList from "../../component/neighborhood-list/neighborhood-list.component";
import NewOrderList from "../../component/new-order-list/neworder-list.component";
import AllStoresOverview from '../../component/AllStores-overview/AllStores-overview.component';

const HomePage = () => {
    return(
        <div className="homepage">
         <MenuList />
         <Offer />
         <NeighborhoodList />
         <NewOrderList />
         <AllStoresOverview />
        </div>
    
    )
};

export default HomePage;