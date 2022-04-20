import React from "react";

import './store.styles.scss';

const Store = ({ stores }) => {
    const { icon, name, items, delivery, pickup, prices, time } = stores;
    return (
        <div className="flex p-4 rounded-[20px] h-[94%] w-[84%] items-start cursor-pointer store">
            <img src={`${icon}`} alt='icon' className="h-16 w-16 my-auto rounded-full" />
            <div className="flex-col p-2 my-auto ml-4 align-middle">
                <p className="text-xl font-bold text-left">{name}</p>
                <p className="text-sm text-gray-400 pt-[0.3rem]">{items}</p>
                <p className="text-sm pt-[0.3rem]">{delivery}</p>
                <p className="text-sm pt-[0.3rem]">{pickup}</p>
                <p className="text-sm text-gray-400 pt-2">{prices}</p>
                <p className="text-sm pt-[0.3rem] text-gray-400">{time}</p>
            </div>
        </div>
    )
};

export default Store;