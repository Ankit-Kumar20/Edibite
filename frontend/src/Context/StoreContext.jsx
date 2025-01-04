import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    const url = "https://localhost:2000";
    const [token, setToken] = useState("");

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
      }

    useEffect(() => {
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
    },[])

    const contextValue = {
        url,
        token,
        setToken,
        logout
        
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
