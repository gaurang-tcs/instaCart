import React from "react";
import ItemPreview from "../../component/item-preview/item-preview.component";

import SideMenu from "../../component/sidemenu/sidemenu.component";

const StoreFrontPage = () => {
    return(
        <div className="flex">
            <SideMenu />
            <ItemPreview />
           
        </div>
    )
};

export default StoreFrontPage;