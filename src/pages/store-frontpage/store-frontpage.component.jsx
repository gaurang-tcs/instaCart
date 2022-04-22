import React from "react";
import ItemPreview from "../../component/item-preview/item-preview.component";

import SideMenu from "../../component/sidemenu/sidemenu.component";
import StoreFrontHeader from '../../component/store-front-header/storefront-header.component';

const StoreFrontPage = () => {
    return (
        <div className="flex-col">
            <StoreFrontHeader />
            <div className="flex">
                <SideMenu />
                <ItemPreview />
            </div>
        </div>
    )
};

export default StoreFrontPage;