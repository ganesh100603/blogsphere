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
    const {register,handleSubmit,formState:{errors}} = useForm()
    const [error,setError] = useState("")

    const login = async(data) =>{
        setError("")
        try {
            const session=await authservice.login(data)
            if (session) {
                const userData = await authservice.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError("Invalid Password or Email")
        }
    }

    return ( 
        <div className='w-full min-h-[85vh] flex items-center justify-center'>
            
        <div className={`w-full sm:max-w-lg max-w-sm rounded-xl p-10 border border-black shadow-lg shadow-slate-400 bg-white`}>

        <div className="mb-4 w-full flex justify-center">
            <Logo/>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">Login to your account</h2>
        
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-[#1D4ED8] hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} 
        className="mt-5"
        >
            
            <div className="space-y-5">
                <Input 
                label="Email:"
                placeholder="Enter your Email"
                type="email"
                {...register("email",{
                    required:"email is requried",
                    validate:{
                        matchPattern:(value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />

                {errors.email && 
                <p className="text-red-500">{errors.email.message}</p>
                }

                <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                {...register("password",{
                    required:"password is required",
                    // validate:(value)=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value) ||
                    // "Enter valid Password"
                })}
                />
                {errors.password && 
                <p className="text-red-500">{errors.password.message}</p>
                }

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
