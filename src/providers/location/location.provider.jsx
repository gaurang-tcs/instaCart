import React, { createContext, useState } from "react";

export const LocationContext = createContext({
    hidden:true,
    toggleHidden: () => {},
});

const LocationProvider = ({ children }) => {
    const[hidden, setHidden] = useState(true);

    const toggleHidden = () => setHidden(!hidden);

    return(
        <LocationContext.Provider value = { {toggleHidden, hidden} }>
            {children}
        </LocationContext.Provider>
    )
};

export default LocationProvider;
