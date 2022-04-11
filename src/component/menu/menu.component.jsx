import React from "react";

import './menu.styles.scss';

const Menu = ({menu}) => {
    const { icon, name, status } = menu;
    return(
        <div className="menu">
            <img src={`${icon}`} alt='icon' />
            <span className="name">{name}</span>
            <span className="status">{status}</span>
        </div>
    )
};

export default Menu;