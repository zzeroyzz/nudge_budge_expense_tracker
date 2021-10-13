import React, {useReducer, createContext } from 'react';


const initialState = [];

export const NudgeBudgeExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState, init);
    return(
        <NudgeBudgeExpenseTrackerContext.Provider value={{appName:'Nudge Budge Expense Tracker'}}>
            {children}
        </NudgeBudgeExpenseTrackerContext.Provider>
    )
}