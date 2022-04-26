import React, { createContext, useState } from "react";

export const LocationContext = createContext({
    lochidden: true,
    togglelocHidden: () => {}
    
});

const LocationProvider = ({ children }) => {

    const [lochidden, setlocHidden] = useState(true);
    
    const togglelocHidden = () => { setlocHidden(!lochidden); };

    return (
        <LocationContext.Provider
            value={{
                togglelocHidden,
                lochidden
            }}>
            {children}
        </LocationContext.Provider>
    )
};

export default LocationProvider;
