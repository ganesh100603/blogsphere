import React,{useState,useEffect} from "react";
import service from "../Appwrite/config";
import { Container,Postcard } from "../compnents";
import { Link } from "react-router-dom";
function Home() {
        return (
            <div className="w-full min-h-screen sm:mt-4 my-5 text-center flex items-center">
                {/* <div className="relative"> */}
                <Container>
                    {/* <div className="flex flex-wrap items-center z-50"> */}
                        <div className="w-full max-w-2xl text-left">
                            <h1 className="text-6xl font-bold">
                            Create a Blog
                            </h1>
                            <p className="mt-4 text-justify text-xl">Everyone has a story to tell — and BlogSphere is where yours begins. 
                                Whether you're sharing your thoughts, experiences, or expertise, 
                                your words can spark ideas, build communities, and inspire the world. Start your journey 
                                as a creator today.</p>
                        <Link to={"/add-post"}>
                        <button className="p-2 text-xl bg-black text-white mt-4 rounded-md 
                        transition-transform duration-200 transform hover:scale-105 active:scale-95">Get Started</button>
                        </Link>
                        </div>
                    {/* </div> */}
                </Container>
                    
                {/* </div> */}
            </div>
        )
    // }
}

export default Home;
