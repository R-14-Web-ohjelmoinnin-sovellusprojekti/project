import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import './components.css'

export default function DeleteUser(){


    const [deleteUser, setDeleteUser] = useState();
    const navigate = useNavigate()
    let user = localStorage.getItem('uname');

    
    function logOut() {

        localStorage.clear();
        localStorage.removeItem("token")
        navigate('/')
        window.location.reload(false)
    }
    

    const deleteAccount = (event) => {
        event.preventDefault();

        if(window.confirm("Are you sure, you want to delete user?")) {
            axios.delete(`http://localhost:8080/delete/user/${user}`, deleteUser)
            .then(response => {
                console.log("User is deleted", response.data);
                logOut();
            })
            .catch(error => {
                console.log("Not working",error)
            })
        }
    }

    return (
        <div className='deleteuser-container'>
            <div className='deleteuser-form'>
            <h2>Delete User</h2>
            <form onSubmit={deleteAccount}>
                <div>
                <br/>
                    <button type="submit" onClick={(e) => setDeleteUser(e.target.value)}>Delete</button>
                </div>
            </form>
            </div>
        </div>
    )
}