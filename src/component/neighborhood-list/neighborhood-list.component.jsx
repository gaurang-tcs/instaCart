import React, { useState } from "react";

import NEIGHBORHOOD_DATA from '../../data/neighborhood';
import Neighborhood from "../neighborhood/neighborhood.component";

const NeighborhoodList = () => {
    const [neighborhood] = useState(NEIGHBORHOOD_DATA);
    return (
        <div className="flex flex-col ml-16 w-full">
            <div className="flex w-[95%] justify-between">
                <div className=" decoration-slate-800 font-semibold text-2xl">Neighborhood</div>
                <div className="text-base font-semibold mt-2 cursor-pointer ml-8">View all &#8594;</div>
            </div>

            <span className="text-sm">Shop local</span>
            <div className="flex">
                {
                    neighborhood.map((neighborhood) => (<Neighborhood key={neighborhood.id} neighborhood={neighborhood} />))
                }
            </div>
        </div>
    )
};

export default NeighborhoodList;