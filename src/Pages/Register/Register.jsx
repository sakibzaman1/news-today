import Navbar from "../Shared/Navbar/Navbar";
import logo from '../../../src/assets/logo.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password');
        
        // create User

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
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

                <form onSubmit={handleRegister} className="mx-auto w-1/2 bg-white p-20 mt-20 space-y-6 mb-40">
                    <h2 className="text-center text-3xl font-semibold mb-10">Please Register</h2> <hr className="mb-6" />

                    <div className="form-control">
                        <label className="label mb-4">
                            <span className="label-text  font-semibold text-xl">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your Name" className="input bg-[#F3F3F3] rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label mb-4">
                            <span className="label-text  font-semibold text-xl">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo URL" className="input bg-[#F3F3F3] rounded-none" required />
                    </div>
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
                    </div>
                    <div className="py-6">
                        <input type="checkbox" name="terms" id="" /> <span className="text-green-500 pl-3">Please Accept Our Terms & Conditions</span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="w-full bg-[#403F3F] text-white h-14 hover:scale-110 transition-transform">Submit</button>
                    </div>
                    <div className="text-center pt-10">
                        <small className="font-medium">Already Have an Account? Please <Link to="/login" className="text-blue-500">Login</Link></small>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Register;