import { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Define the AuthProvider component
const AuthProvider = ({ children }) => {  // Fix typo: childer -> children
    const [isLogin, setIsLogin] = useState(false);

    const setLoginEnable = () => {
        setIsLogin(true);
    };

    const setLoginDisable = () => {
        setIsLogin(false);
    };

    return (
        <AuthContext.Provider value={{ isLogin, setLoginEnable, setLoginDisable }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
