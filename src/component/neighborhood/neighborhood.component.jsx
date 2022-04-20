import React from "react";

const Neighborhood = ({ neighborhood }) => {
    const { name, imgUrl } = neighborhood;
    return (
        <div className="flex-col w-1/2 h-auto cursor-pointer">
            <img src={`${imgUrl}`} alt='icon' className="h-[6rem] w-[7rem] p-4 rounded-[35px]" />
            <span className="w-24 h-auto text-xs font-semibold p-2 ml-6 text-center">{name}</span>
        </div>
    )
};

export default Neighborhood;