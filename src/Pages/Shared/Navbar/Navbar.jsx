import { Link, NavLink } from "react-router-dom";
import { FcPlanner } from "react-icons/fc";
import { useContext } from "react";
import  { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);


    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()

    }
    const navLinks = <>
        <li ><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>

    </>

    return (
        <div className="navbar bg-pink-100 sticky top-0  z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-100 rounded-box w-52 text-red-400">



                        {navLinks}


                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-red-300"><FcPlanner /><span className="text-red-400">H</span><span className="text-orange-400">A</span><span className="text-pink-400">P</span><span className="text-rose-400">P</span><span className="text-red-600">Y</span> <span className="text-red-600">Event</span></a>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-red-400 font-bold">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end" >
            {
                user? 
                <button onClick={handleSignOut} className="text-red-400">Sign Out</button>:
                
                <Link to="/login"><button className="btn bg-red-200 text-slate-500">Login</button></Link>
            
            }
            
            </div>
        </div>
    )
};
export default Navbar;