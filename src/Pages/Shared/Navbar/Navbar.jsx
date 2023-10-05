import { Link, NavLink } from "react-router-dom";
import userLogo from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleLogout = () => {
            signOutUser();
    }

    return (
        <div className="navbar mt-6 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/career">Career</NavLink></li>
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-10 px-1">
                    <li className="font-normal"><NavLink to="/">Home</NavLink></li>
                    <li className="font-normal"><NavLink to="/about">About</NavLink></li>
                    <li className="font-normal"><NavLink to="/career">Career</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-6">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={userLogo} />
                    </div>
                </div>
                <div>
                    {
                        user ?

                            <Link><button onClick={handleLogout} className="bg-[#403F3F] text-white rounded-none w-28 h-10 hover:scale-110 transition-transform">Logout</button></Link> :

                            <Link to="/login"><button className="bg-[#403F3F] text-white rounded-none w-28 h-10 hover:scale-110 transition-transform">Login</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;