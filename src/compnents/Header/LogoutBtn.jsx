import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../Appwrite/auth";
import { logout } from "../../Store/authSlice";

function LogoutBtn({className}) {
    const dispatch= useDispatch()
    const logoutHandler=()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }
    return ( 
        <button onClick={logoutHandler} className={`inline-block duration-200 rounded-full ${className}`}>
            Logout
        </button>
     );
}

export default LogoutBtn;