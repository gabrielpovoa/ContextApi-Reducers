import { reducerActionType } from '../types/reducerActionType';

export interface ThemeType {
    status: 'light' | 'dark',
}

export const themeInitialState: ThemeType = {
    status: 'light',
}

export const ThemeReducer = (state: ThemeType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_STATUS':
            return {...state, status:action.payload.status}
        break
    }
    return state;
}