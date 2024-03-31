import React, {useReducer, useContext, createContext} from 'react';
// prepare data layer
export const Context = createContext();
// provide data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <Context. Provider value={useReducer (reducer, initialState)}>
        {children}
    </Context.Provider>
);
// pull information form data layer
export const useStateValue = () => useContext(Context);