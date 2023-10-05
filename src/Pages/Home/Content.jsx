import { useEffect, useState } from "react";
import SingleNews from "./singleNews";


const Content = () => {

    const [news, setNews] = useState([]);

    useEffect( ()=> {
        fetch('news.json')
        .then( res=> res.json())
        .then( data=> setNews(data))
    },[]);

    return (
        <div>
            <h2 className="ml-4 mb-10 mt-6 font-bold text-3xl text-center">News Today</h2>
            <div className="space-y-10">
                {
                    news.slice(0,4).map(singleNews => <SingleNews key={singleNews.id} singleNews={singleNews}></SingleNews> )
                }
            </div>
        </div>
    );
};

export default Content;