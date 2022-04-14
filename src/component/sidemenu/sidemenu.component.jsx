import React from "react";

import './sidemenu.styles.scss';

const SideMenu = () => {
    return (
        <div className="sidemenu">
            <div className="side-header">
                <img src='https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' alt='icon' />

                <div className="everyday">
                    <span className="prices">Everyday store prices</span>
                    <div className='arrow'>&#10095;</div>
                </div>
                <div>
                    <span className="gurantee">100% satisfaction gurantee</span>
                    <div className='arrow'>&#10095;</div>
                </div>
            </div>
        </div>
    )
};

export default SideMenu;