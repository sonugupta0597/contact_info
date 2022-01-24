import {ADDUSER} from "../ActionTypes.js";
import {DELETEUSER} from "../ActionTypes.js";
import {UPDATEUSER} from "../ActionTypes.js";

export const addUserAction = (newUser)=>{
    console.log(newUser)
      return(
          {
              type:ADDUSER,
              payload: newUser
          }
      )
}

export const deleteUserAction = (id)=>{
    return(
        {
            type:DELETEUSER,
            payload: id
        }
    )
}

export const updateUserAction = (updatedUser)=>{
    return(
        {
            type:UPDATEUSER,
            payload: updatedUser
        }
    )
}