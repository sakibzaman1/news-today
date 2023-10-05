
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import logo from '../../../src/assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        

        // sign in user

        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            // navigate user
            navigate(location?.state? location.state : '/')
        })
        .catch(error=> {
            console.log(error.message)
        })
    }

    return (
        <div className=" bg-[#F3F3F3] ">
            <div className="flex items-center p-4">
               <img src={logo} alt="" />
               <Navbar></Navbar>
            </div>

            <div className="flex">

                <form onSubmit={handleLogin} className="mx-auto w-1/2 bg-white p-20 mt-20 space-y-6 mb-40">
                    <h2 className="text-center text-3xl font-semibold mb-10">Please login</h2> <hr className="mb-6" />
                    <div className="form-control">
                        <label className="label mb-4">
                            <span className="label-text  font-semibold text-xl">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input bg-[#F3F3F3] rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label mb-4">
                            <span className="label-text  font-semibold text-xl">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input rounded-none bg-[#F3F3F3]" required />
                        <label className="label mt-4">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="w-full bg-[#403F3F] text-white h-14 hover:scale-110 transition-transform">Login</button>
                    </div>
                    <div className="text-center pt-10">
                        <small className="font-medium">Dont`t Have an Account? Please <Link to="/register"  className="text-red-500">Register</Link></small>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Login;