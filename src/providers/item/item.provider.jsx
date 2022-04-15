import React, { createContext, useState,  useEffect } from 'react';

export const ItemContext = createContext ({
    Items: [],
});

const ItemProvider = ({children}) => {

    const [Items,setItems] = useState([]);

    

    return (
        <ItemContext.Provider
        value={{ 
         
        }}
        >
         {children}
        </ItemContext.Provider>
    );

};

export default ItemProvider;