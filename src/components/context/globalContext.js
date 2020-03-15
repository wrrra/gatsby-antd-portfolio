import React,{ createContext, useReducer } from 'react'
import GlobalReducer from './globalReducer'

const initialState = {
    
}
export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);
    return (
        <GlobalContext.Provider value={{
        
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
