import React, { createContext, useState } from "react";

export const LogInContext = createContext({
    logInHidden: true,
    toggleLogInHidden: () => {},
    
});

const LogInProvider = ({ children }) => {
    const [logInHidden, setLogInHidden] = useState(true);

    const toggleLogInHidden = () => { setLogInHidden(!logInHidden); };

    if (!logInHidden) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

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
