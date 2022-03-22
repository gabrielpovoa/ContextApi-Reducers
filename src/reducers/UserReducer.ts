import { reducerActionType } from '../types/reducerActionType'

export interface UserType {
    registration: string;
    age: number;
}

export const userInitialState: UserType = {
    registration: '',
    age: 0
}

export const UserReducer = (state: UserType, action: reducerActionType) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, registration: action.payload.registration}
        break;
        case 'CHANGE_AGE':
            return {...state, age: action.payload.age}
        break;
    }

    return state;
}