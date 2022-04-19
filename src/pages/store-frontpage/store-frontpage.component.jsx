import React from "react";
import ItemPreview from "../../component/item-preview/item-preview.component";

import SideMenu from "../../component/sidemenu/sidemenu.component";


import './store-frontpage.styles.scss';

const StoreFrontPage = () => {
    return(
        <div className="store-frontpage">
            <SideMenu />
            <ItemPreview />
           
        </div>
    )
};

export default StoreFrontPage;