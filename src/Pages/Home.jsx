import React from "react";
import {Container} from "../compnents";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

function Home() {
        return (
            <div className="w-full min-h-screen sm:mt-4 my-5 text-center flex items-center">
                <Container>
                    <div className="flex flex-col-reverse lg:flex-row justify-around items-center min-h-screen gap-10">
                        <div className="w-full max-w-2xl text-left">
                            <h1 className="text-6xl font-bold">
                            Create a Blog
                            </h1>
                            <p className="mt-4 text-justify text-xl">Everyone has a story to tell — and BlogSphere is where yours begins. 
                                Whether you're sharing your thoughts, experiences, or expertise, 
                                your words can spark ideas, build communities, and inspire the world. Start your journey 
                                as a creator today.</p>
                        <Link to={"/add-post"}>
                        <button className="p-2 text-lg bg-black text-white mt-4 rounded-md 
                        transition-transform duration-200 transform hover:scale-105 active:scale-95">Get Started</button>
                        </Link>
                        </div>

                    <div className="w-full max-w-2xl relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
                        <img
                            src={image3}
                            alt="Image 3"
                            className="absolute top-4 left-4 w-full h-full object-cover rounded-xl rotate-3 z-10"
                        />
                        <img
                            src={image2}
                            alt="Image 2"
                            className="absolute top-2 left-2 w-full h-full object-cover rounded-xl rotate-6 z-20"
                        />
                        <img
                            src={image1}
                            alt="Image 1"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl 
                            rotate-0 z-30 shadow-2xl transition-transform duration-300 hover:scale-105"
                        />
                        </div>
                </div>
                </Container>
            </div>
        )
    // }
}

export default Home;
