import React from "react";

import './homepage.styles.scss';

import MenuList from "../../component/menulist/menulist.component";
import Offer from "../../component/offer/offer.component";
import NeighborhoodList from "../../component/neighborhood-list/neighborhood-list.component";
import NewOrderList from "../../component/new-order-list/neworder-list.component";
import AllStoresOverview from '../../component/AllStores-overview/AllStores-overview.component';
import Header from '../../component/header/header.component.jsx';
import SideBar from "../../component/drawer/drawer.component";
const HomePage = () => {
    return (
        <div className="flex-col">
            <div className="flex">
                <SideBar/>
                <Header />
            </div>
            <div className='flex-col w-[75%] h-auto mt-8 ml-52 -z-20'>
                <MenuList />
                <Offer />
                <NeighborhoodList />
                <NewOrderList />
                <AllStoresOverview />
            </div>
        </div>

    )
};

export default HomePage;