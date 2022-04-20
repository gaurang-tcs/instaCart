import React from "react";

import { Link } from "react-router-dom";



const NewOrder = ({ neworder }) => {
    const { icon, name, status } = neworder;
    return (
        <Link className="flex-col px-8 text-center cursor-pointer" to='/storefront'>
            <img src={`${icon}`} alt='icon' className="h-24 w-24 rounded-full" />
            <div className="flex-col">
            <p className="pt-4 text-xs font-semibold">{name}</p>
            <p className="font-semibold text-xs text-lime-600">{status}</p>
            </div>
        </Link>
    )
};

export default NewOrder;