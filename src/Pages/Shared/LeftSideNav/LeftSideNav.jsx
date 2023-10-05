import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shorts from "./Shorts";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    const [shortNews, setShortNews] = useState([]);

    // categories data

    useEffect( () => {
        fetch('categories.json')
        .then( res => res.json())
        .then( data => setCategories(data))
    },[]);

    // Short News data

    useEffect( ()=> {
        fetch('shortNews.json')
        .then( res=> res.json())
        .then( data=> setShortNews(data))
    },[]);

    return (
        <div className="">
            <h2 className="ml-4 mb-10 mt-6 font-bold text-3xl text-center">All Categories</h2>
        
            <div className="flex flex-col gap-6 mb-10">
                {
                    categories.map(category => <Link
                         key={category.id}>
                        <button className="hover:bg-[#E7E7E7] text-center hover:text-black rounded-none w-full h-10 font-medium text-[#9F9F9F] text-xl hover:scale-110 transition-transform">{category.name}</button>
                        </Link>)
                }
            </div>

            <h2 className="ml-4 mb-10 mt-20 font-bold text-3xl text-center">Short News</h2>

            <div className="mb-6 space-y-10">
                {
                    shortNews.map( shorts => <Shorts key={shorts.id} shorts={shorts} ></Shorts>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;