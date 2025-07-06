import React from "react";

function Loader(){
    return(
        <div className="fixed inset-0 w-full flex justify-center items-center z-1500">
            <div className="w-16 h-16 border-8 border-black rounded-full border-x-transparent animate-spin-scale">

            </div>
        </div>
    )
}

export default Loader