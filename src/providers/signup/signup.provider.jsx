import React, { createContext, useState } from "react";

export const SignUpContext = createContext({
    signUpHidden: true,
    toggleSignUpHidden: () => {},
    
});

const SignUpProvider = ({ children }) => {
    const [signUpHidden, setSignUpHidden] = useState(true);

    const toggleSignUpHidden = () => { setSignUpHidden(!signUpHidden); };

    return (
        <SignUpContext.Provider
            value={{
                toggleSignUpHidden,
                signUpHidden
            }}>
            {children}
        </SignUpContext.Provider>
    )
};

export default SignUpProvider;
