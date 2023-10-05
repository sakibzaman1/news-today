import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { BiLogoTwitter } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import advertiseBg from '../../../assets/bg.png'
import CricketScorecard from "./CricketScorecard";

const RightSideNav = () => {
    return (
        <div className="border">
            <div className="flex flex-col space-y-3 p-4 mb-10">
                <h2 className="font-semibold text-xl mb-6">Login With</h2>
                <button className="btn btn-outline rounded-none bg-transparent hover:rounded-none capitalize">
                    <FcGoogle></FcGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline rounded-none bg-transparent hover:rounded-none capitalize">
                    <BsGithub></BsGithub>
                    Login with Github
                </button>
            </div>
            <div className="flex flex-col mb-10 p-4">
                <h2 className="font-semibold text-xl mb-9 pt-3">Find Us on</h2>
                <span className="flex items-center gap-3 p-4 border-b-2 border-x-2 border-t-2"><MdFacebook color="blue"></MdFacebook><a className="hover:scale-110 transition-transform" href="https://facebook.com/">Facebook</a></span>
                <span className="flex items-center gap-3 p-4 border-b-2 border-x-2"><BiLogoTwitter color="skyblue"></BiLogoTwitter><a className="hover:scale-110 transition-transform" href="https://twitter.com/">Twitter</a></span>
                <span className="flex items-center gap-3 p-4 border-b-2 border-x-2"><AiFillInstagram color="#ee2a7b"></AiFillInstagram><a className="hover:scale-110 transition-transform" href="https://www.instagram.com/">Instagram</a></span>
            </div>
            <div className="flex flex-col mb-10 m-4 pb-4 bg-[#F3F3F3]">
                <h2 className="font-semibold text-xl mb-9 pt-4 pl-4">Q Zone</h2>
                <div className="flex flex-col justify-center items-center gap-6">
                <img className="w-4/5 hover:skew-y-3 cursor-pointer" src={qZone1} alt="" />
                <img className="w-4/5 hover:skew-y-3 cursor-pointer" src={qZone2} alt="" />
                <img className="w-4/5 hover:skew-y-3 cursor-pointer" src={qZone3} alt="" />
                </div>
            </div>
            <div className="m-4 relative">
                <img className="w-full" src={advertiseBg} alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4">
                    <h1 className="text-3xl font-bold mb-4">Create an Amazing Newspaper</h1>
                    <p className="font-normal text-base mb-8">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="bg-[#D72050] text-white rounded-none w-28 h-10">Learn More</button>
                </div>
            </div>
            
            <div className="mt-20 text-center w-full">
            <CricketScorecard></CricketScorecard>
            </div>

        </div>
    );
};

export default RightSideNav;