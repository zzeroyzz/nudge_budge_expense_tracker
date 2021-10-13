import React, {useReducer, createContext } from 'react';


const initialState = [];

export const NudgeBudgeExpenseTrackerContext = createContext(initialState);

export const provider = ({children}) =>{
    return(
        <NudgeBudgeExpenseTrackerContext.Provider value={{appName:'Nudge Budge Expense Tracker'}}>
            {children}
        </NudgeBudgeExpenseTrackerContext.Provider>
    )
}