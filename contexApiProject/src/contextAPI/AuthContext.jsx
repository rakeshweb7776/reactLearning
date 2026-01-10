import { createContext, useState, useContext, useEffect } from "react";

// Create Context
const AuthContext = createContext()

// Create Content Provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Check if user is logged in on app start
    useEffect(() => {
        // const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        console.log("Local Data : ",userData);
        
        if (userData) {
            setUser(JSON.parse(userData));
        }
        setLoading(false);
    }, []);


    // Login Function
    const login = (data) => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
    }

    // Logout Function
    const logout = () => {
         setUser(null);
        localStorage.removeItem('user');
    }

    const value = {
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('use Auth must be used withing AuthProvider')
    }
    return context
}