import React, { createContext, useState } from 'react';
import { setLogInUser, setSignUpUser } from './user.utils';

export const UserContext = createContext ({
    user: [],
    LogInUser: () => {},
    SignUpUser: () => {}
  
});

const UserProvider = ({children}) => {
    
    const [user,setUser] = useState([]);
    
    const LogInUser = userCredentials => setUser(setLogInUser(userCredentials));
    const SignUpUser = userCredentials => setUser(setSignUpUser(userCredentials))

    return (
        <UserContext.Provider
        value={{ 
           user,
           LogInUser,
           SignUpUser
        }}
        >
         {children}
        </UserContext.Provider>
    );

};

export default UserProvider;