import blog from "../assets/blog.png"
function Logo() {
    return ( 
        <div className="w-[40px] flex items-center gap-2 text-lg font-extrabold">
            <img src={blog} alt="Logo" />
            BlogSphere
        </div>
     );
}

export default Logo;
