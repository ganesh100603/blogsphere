import React from "react";
import appwriteService from "../Appwrite/config";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {

    return (
        
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center">
                    {featuredImage ? (
                        <img
                            src={appwriteService.getFilePreview(featuredImage)}
                            alt={title}
                            className="w-full h-44 sm:h-48 md:h-56 lg:h-64 object-cover rounded-xl"
                        />
                        
                    ) : (
                        <div className="w-full h-40 bg-gray-300 rounded-xl flex items-center justify-center">
                            <span className="text-gray-500">No Image</span>
                        </div>
                    )}
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}

export default Postcard;
