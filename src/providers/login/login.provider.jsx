import React, { createContext, useState } from "react";

export const LogInContext = createContext({
    logInHidden: true,
    toggleLogInHidden: () => {},
    
});

const LogInProvider = ({ children }) => {
    const [logInHidden, setLogInHidden] = useState(true);

    const toggleLogInHidden = () => { setLogInHidden(!logInHidden); };

    return (
        <LogInContext.Provider
            value={{
                toggleLogInHidden,
                logInHidden
            }}>
            {children}
        </LogInContext.Provider>
    )
};

export default LogInProvider;
