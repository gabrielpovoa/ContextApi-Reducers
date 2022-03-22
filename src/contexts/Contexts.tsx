import React, { createContext, useReducer } from 'react';
import { UserType, userInitialState, UserReducer } from '../reducers/UserReducer';
import { ThemeReducer, themeInitialState, ThemeType } from '../reducers/themeReucer';
import { reducerActionType } from '../types/reducerActionType';


interface initalStateType {
    user: UserType;
    theme: ThemeType;
}

interface ContextType {
    state: initalStateType;
    dispatch: React.Dispatch<any>
}


const initalState = {
    user: userInitialState,
    theme: themeInitialState
}

export const Context = createContext<ContextType>({
    state: initalState,
    dispatch: () => null
});

const mainReducer = (state: initalStateType, action: reducerActionType) => ({
    user: UserReducer(state.user, action),
    theme: ThemeReducer(state.theme, action)
})

export const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initalState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

