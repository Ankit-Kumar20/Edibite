import { createContext } from "react";
export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    const url = "https://localhost:2000";

    const contextValue = {
        url
        
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
