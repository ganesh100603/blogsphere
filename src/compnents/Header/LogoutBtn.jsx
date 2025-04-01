import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../Appwrite/auth";
import { logout } from "../../Store/authSlice";

function LogoutBtn() {
    const dispatch= useDispatch()
    const logoutHandler=()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }
    return ( 
        <button onClick={logoutHandler} className="inline-block px-6 duration-200 hover:bg-gray-200 rounded-full">
            Logout
        </button>
     );
}

export default LogoutBtn;