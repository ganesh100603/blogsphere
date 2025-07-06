import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../Appwrite/config";
import { Button, Container, Loader } from "../compnents";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading,setLoading] = useState(true)
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            })
            .finally(()=>setLoading(false))
            ;
        } else {
        navigate("/")
        setLoading(false)
        }
        
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return loading?(
        <div className="w-full h-screen">
            <Loader/>
        </div>
    ):(
        <>
        {post && (
            <div className="py-6 px-4 sm:-px-6 lg:px-12">
                <Container>
                <div className="flex flex-col items-center gap-6">
                   
                    <h1 className="sm:text-4xl text-3xl font-bold text-center">{post.title}</h1>

                    <div className="relative w-full max-w-4xl">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl w-full max-h-[70vh] object-cover"
                        />
    
                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
              
                    <div className="w-full max-w-4xl text-lg leading-relaxed browser-css">
                        {parse(post.content)}
                    </div>
                </div>
                </Container>
            </div>
        )
    }
        </>
    )
}