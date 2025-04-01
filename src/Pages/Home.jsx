import React,{useState,useEffect} from "react";
import service from "../Appwrite/config";
import { Container,Postcard } from "../compnents";

function Home() {
    const[posts,setPosts] = useState([])
    useEffect(()=>{
        service.getPosts().then((posts)=>
        {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
    if(posts.length===0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-4xl font-bold ">
                            Welcome to BlogSphere
                            </h1>
                            <p className="mt-4 text-center">The place where your ideas come to life.</p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (

            <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
  
    )
}

export default Home;
