import React, { useState, useEffect } from 'react';
import { addUserAction, updateUserAction } from './actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

export default function AddNewUser() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [labelName, setLabelName] = useState("New User")

    const dispatch = useDispatch()
    const users = useSelector(state => state.userReducer)

    const { id } = useParams('id')

    useEffect(() => {
        if (id) {
            const u = users.find(user => user.id == id)
            setLabelName("Update User")
            setName(u.name)
            setEmail(u.email)
            setPhone(u.phone_no)
            setAddress(u.address)
        }
    }, [id])

    const updateUser = (e) => {
        e.preventDefault();
        const phone_no = phone;
        dispatch(updateUserAction({ id, name, email, phone_no, address }));
        setName("")
        setEmail("")
        setPhone("")
        setAddress("")
    }

    const addUser = (e) => {
        e.preventDefault()
        dispatch(addUserAction({ name, email, phone, address }))
        setName("")
        setEmail("")
        setPhone("")
        setAddress("")
    }

    return (
        <div className={"addNewUser"}>
            <form onSubmit={id ? updateUser : addUser}>
                <div className="newUser">{labelName}</div>
                <div className="form_div">
                    <label>Name :</label>
                    <input type="text" placeholder="enter your your full name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form_div">
                    <label>Email Id :</label>
                    <input type="email" placeholder="enter your email id" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form_div">
                    <label>Phone No :</label>
                    <input type="text" placeholder="enter your phone no" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="form_div">
                    <label>Address :</label>
                    <input type="textArea" placeholder="enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="form_div">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )


}
