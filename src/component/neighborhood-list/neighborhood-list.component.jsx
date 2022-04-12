import React, { useState } from "react";

import './neighborhood-list.styles.scss';

import NEIGHBORHOOD_DATA from '../../data/neighborhood';
import Neighborhood from "../neighborhood/neighborhood.component";

const NeighborhoodList = () => {
    const [neighborhood] = useState(NEIGHBORHOOD_DATA);
    return (
        <div className="neighborhood-list">
            <div className="n-header">
                <h2>Neighborhood</h2>
                <span className="view-all">View all &#8594;</span>
            </div>

            <span className="local">Shop local</span>
            <div className="list">
                {
                    neighborhood.map((neighborhood) => (<Neighborhood key={neighborhood.id} neighborhood={neighborhood} />))
                }
            </div>
        </div>
    )
};

export default NeighborhoodList;