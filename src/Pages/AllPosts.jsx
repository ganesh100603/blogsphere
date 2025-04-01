import React, { useEffect, useState } from "react";
import { Container, Postcard } from "../compnents";
import service from "../Appwrite/config";
function AllPosts() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        service.getPosts().then((posts)=>
        {
            console.log("Fetched Posts:", posts);
            if(posts){
                setPosts(posts.documents)
            }
        }
        )
    },[])

    return(
        <div className="w-full py-8">
            <Container className="" >
                <div className="flex flex-wrap">
                    {posts.map((post)=>(
                        <div key={post.$id} className="p-2 w-1/4">
                            <Postcard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts;