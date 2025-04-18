import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {login as authLogin} from "../Store/authSlice"
import {Button,Input,Logo} from "./index"
import { useDispatch } from "react-redux";
import authservice from "../Appwrite/auth";
import { useForm } from "react-hook-form";


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState("")

    const login = async(data) =>{
        console.log("Login button clicked",data);
        setError("")
        try {
            const session=await authservice.login(data)
            console.log("Session Created:", session);
            if (session) {
                const userData = await authservice.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return ( 
        <div
    className='flex items-center justify-center w-full my-8'
    >
        <div className={`mx-auto w-full max-w-lg  rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block justify-center w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Login to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} 
        className="mt-8"
        >
            
            <div className="space-y-5">
                <Input 
                label="Email:"
                placeholder="Enter your Email"
                type="email"
                {...register("email",{
                    required:true,
                    validate:{
                        matchPattern:(value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />

                <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                {...register("password",{
                    required:true,
                    // validate:(value)=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value) ||
                    // "Enter valid Password"
                })}
                />
                <Button
                type = "submit"
                className="w-full"
                >Login</Button>
            </div>
        </form>

        </div>
        </div>
     );
}

export default Login
