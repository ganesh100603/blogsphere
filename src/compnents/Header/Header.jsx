import React, { useState } from "react";
import {Container,Logo,LogoutBtn} from "../index"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";

function Header() {
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()
    const [isOpen,setIsOpen] = useState(false)
    
    const toggleMenu = () => setIsOpen((prev)=>!prev)

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
        <header className="py-5 shadow bg-white z-50 relative">

            <Container>
                <nav className="items-center sm:flex hidden justify-between">
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
                                <LogoutBtn className="px-6 hover:bg-gray-200" />
                            </li>
                        ) }
                    </ul>
                </nav>
                {/*Mobile Navabr*/}
                <div className="sm:hidden flex justify-between items-center">
                    <Link to={"/"}>
                        <Logo/>
                    </Link>

                    <button 
                    onClick={toggleMenu}
                    className="text-2xl text-black focus:outline-none transition-transform duration-500">
                        <div 
                        className={`transition-transform duration-500 ${isOpen?"rotate-[360deg]":"rotate-0"}`}
                        >
                        {isOpen? <FaTimes/> : <FaBars/>}
                        </div>
                    </button>
                </div>
                    {isOpen&&
                        <div className="sm:hidden bg-white shadow rounded-lg p-4 absolute top-full right-0 left-0 z-40">
                            <ul className="flex flex-col gap-4">
                                {navItems.map((item)=>
                                    item.active?(
                                        <li key={item.name}>
                                            <button
                                            onClick={()=>{setIsOpen(false)
                                                navigate(item.slug)
                                            }}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-200 rounded"
                                        >
                                                {item.name}
                                            </button>
                                        </li>
                                    ):null
                                )}
                                {authStatus&&(
                                    <li className="w-full text-left px-4 py-2 hover:bg-gray-200 rounded">
                                        <LogoutBtn/>
                                    </li>
                                )}
                            </ul>
                        </div>
                    }
            </Container>
        </header>
     );
}

export default Header;