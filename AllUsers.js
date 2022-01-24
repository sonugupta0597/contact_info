import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux';
import {deleteUserAction} from './actions'

export default function AllUsers() {

    const users = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const deleteUser = (id)=>{
          dispatch(deleteUserAction(id))
    }

    return (
        <div className="allUsers">
            <table>
                <tr>
                    <th>
                        Name
                    </th>

                    <th>
                        Email
                    </th>

                    <th>
                        Phone No
                    </th>

                    <th>
                        Address
                    </th>

                    <th>
                        Delete
                    </th>

                    <th>
                        update
                    </th>
                </tr>
                {
                    users.map((user) => {
                        return (
                            <tr>
                                <td>
                                  {user.name}
                                </td>

                                <td>
                                    {user.email}
                                </td>

                                <td>
                                    {user.phone_no}
                                </td>

                                <td>
                                    {user.address}
                                </td>

                                <td>
                                    <Link to={"/deleteUser"}><button className="btn delete" onClick={()=>deleteUser(user.id)}>delete</button></Link>
                                </td>

                                <td>
                                    <Link to={"/updateUser/"+user.id}><button className="btn update">update</button></Link>
                                </td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )

}
