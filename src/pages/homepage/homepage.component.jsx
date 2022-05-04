import React from "react";

import MenuList from "../../component/menulist/menulist.component";
import Offer from "../../component/offer/offer.component";
import NeighborhoodList from "../../component/neighborhood-list/neighborhood-list.component";
import NewOrderList from "../../component/new-order-list/neworder-list.component";
import AllStoresOverview from '../../component/AllStores-overview/AllStores-overview.component';
import Header from '../../component/header/header.component.jsx';
import SideBar from "../../component/drawer/drawer.component";

const HomePage = () => {

    // const user = localStorage.getItem('user-info')
    // console.log(user);

    // const ActiveUser = (user) => {
    //     user.map(email=> {return email})
    // } 

    // console.log(ActiveUser);

    return (
        <div className="flex-col">
            <div className="flex">
                <SideBar/>
                <Header />
            </div>
            <div className='flex-col w-[72%] h-auto mt-8 ml-52 -z-20'>
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