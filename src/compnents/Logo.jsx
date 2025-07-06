import blog from "../assets/blog.png"
function Logo() {
    return (
        <div className="flex items-center gap-2 text-xl font-extrabold">
            <img src={blog} alt="Logo" className="w-9" />
            BlogSphere
        </div>
     );
}

export default Logo;
