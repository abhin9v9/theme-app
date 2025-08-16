import { createContext, useReducer } from "react";

// Intial State
const initialState = {
    theme: "light"
};

// Reducer Function
function themeReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_THEME":
            return { theme : state.theme === "light" ? "dark" : "light"};
        default: 
            return state;
    }
}

// Context
export const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    );
}
