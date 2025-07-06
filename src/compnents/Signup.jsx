import React,{useState} from "react";
import authservice from "../Appwrite/auth";
import { Link,useNavigate } from "react-router-dom";
import { login } from "../Store/authSlice";
import {Button,Input,Logo} from "./index"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const dispatch =useDispatch()
    const {register,handleSubmit,formState:{errors}} = useForm()

    const signup = async(data) => {
        setError("")
        try {
            const userData=await authservice.createAccount(data);
            if(userData){
                const userData = await authservice.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return ( 
        <div className="flex items-center justify-center">
        <div className={`w-full sm:max-w-lg max-w-sm rounded-xl p-10 border border-black shadow-lg shadow-slate-400 bg-white`}>
        <div className="mb-4 flex justify-center">
                    <Logo width="100%" />
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-[#1D4ED8] transition-all duration-200 hover:underline"
                >
                    Login
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(signup)}>
                <div className="space-y-4 mt-3">
                    <Input
                    label="Full Name:"
                    placeholder="Enter your full name"
                    {...register("name",{
                        required:"name is required"
                    })}
                    />

                    {errors.name&&
                    <p className="text-red-500">{errors.name.message}</p>
                    }

                    <Input 
                    label="Email:"
                    placeholder="Enter your Email"
                    type="Email"
                    {...register("email",{
                        required:"email is required",
                        validate:{
                            matchPattern:(value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />

                    {errors.email&&
                    <p className="text-red-500">{errors.email.message}</p>
                    }
                    <Input 
                    label="Password"
                    placeholder="Enter your Password"
                    type="password"
                    {...register("password",{
                        required:"password is required"
                    })}
                    />
                    {errors.password&&
                    <p className="text-red-500">{errors.password.message}</p>
                    }
                    <Button type="submit" className="w-full">Create Account</Button>
                </div>
            </form>
        </div>

</div>
     );
}

export default Signup;