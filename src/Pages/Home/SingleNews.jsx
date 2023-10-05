/* eslint-disable react/prop-types */
import { AiFillEye , AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";

const SingleNews = ({ singleNews }) => {

    const { _id, title, author, image_url, details, total_view, rating } = singleNews;
    const { name, published_date, img } = author;
    const {number} = rating;

    return (
        <div>
            <div className="p-4 bg-[#F3F3F3] flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <p>{name}</p>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <BsBookmark></BsBookmark>
                    <AiOutlineShareAlt></AiOutlineShareAlt>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl rounded-none">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>

                    {
                        details.length > 200? <p>{details.slice(0, 200)}...<Link to={`/news/${_id}`} className="text-red-500">Read More</Link></p> :
                        <p>{details}</p>
                    }
                    
                    <hr />
                </div>
                <div className="flex justify-between p-6">
                        <div className="flex items-center gap-4">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" checked />
                        </div>
                        <p>{number}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <AiFillEye></AiFillEye>
                            <p>{total_view}</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default SingleNews;