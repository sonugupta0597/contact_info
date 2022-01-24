import { combineReducers } from 'redux'
import { ADDUSER } from "../ActionTypes.js";
import { DELETEUSER } from "../ActionTypes.js";
import { UPDATEUSER } from "../ActionTypes.js";

const users = [{ id: 1, name: "sonu gupta", email: "sonugupta0597@gmail.com", phone_no: "0123456789", address: "ward no 4 near sbi" }];

export const userReducer = (state = users, action) => {

    switch (action.type) {
        case ADDUSER:
            return [...state, {
                id: state.length + 1,
                name: action.payload.name,
                email: action.payload.email,
                phone_no: action.payload.phone,
                address: action.payload.address
            }];

        case DELETEUSER:
            return (state.filter(user => user.id !== action.payload))

        case UPDATEUSER:
            return state.map(user => {
                if (user.id == action.payload.id) {
                    return action.payload
                }
                return user;
            })

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    userReducer
})

export default rootReducer;