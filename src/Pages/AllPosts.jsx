import React, { useEffect, useState } from "react";
import { Container, Postcard,Loader } from "../compnents";
import service from "../Appwrite/config";
function AllPosts() {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        service.getPosts().then((posts)=>
        {
            if(posts){
                setPosts(posts.documents)
            }
        }
        )
        .finally(()=>setLoading(false))
    },[])

    return loading?(
    <div className="w-full h-screen">
        <Loader/>
    </div>
    ):(
        <div className="w-full py-8">
            <Container>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-2 auto-rows-auto gap-2">
                    {posts.map((post)=>(
                        <div key={post.$id}>
                            <Postcard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts;