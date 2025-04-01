import React from "react";
import {Container,Logo,LogoutBtn} from "../index"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate() 
    const navItems=[
        {
            name:'Home',
            slug:'/',
            active:true
        },
        {
            name:'Signup',
            slug:'/signup',
            active:!authStatus
        },
        {
            name:'Login',
            slug:'/login',
            active:!authStatus
        },
      
        {
            name:'All Posts',
            slug:'/all-posts',
            active:authStatus
        },
        {
            name:'Add Post',
            slug:'/add-post',
            active:authStatus
        },
    ]
    return ( 
        <header className="w-5/6 mx-auto">

            {/* <Container> */}
                <nav className="flex items-center justify-between border-b-2 border-black ">
                    <div className="mr-4">
                        <Link to='/'>
                        <Logo  />
                        </Link>
                    </div>
                    <ul className="flex ml-auto space-x-4">
                        {navItems.map((item)=>
                            item.active?(
                                <li key={item.name}>
                                    <button onClick={()=>{
                                    console.log("Navigating to:", item.slug)
                                    navigate(item.slug)}}
                                    className={`inline-block px-6 py-2 duration-200
                                    hover:bg-gray-200 rounded-full 
                                    ${item.name === 'Login' ? 'text-white bg-black hover:bg-zinc-700' : ''}`}>
                                        {item.name}</button>
                                </li>
                            ):null
                        )}
                        {authStatus &&(
                            <li className="flex justify-center">
                                <LogoutBtn />
                            </li>
                        ) }
                    </ul>
                </nav>
            {/* </Container> */}
        </header>
     );
}

export default Header;