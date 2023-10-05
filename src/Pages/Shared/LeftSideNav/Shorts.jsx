/* eslint-disable react/prop-types */
import { BsCalendarDate } from "react-icons/bs";

const Shorts = ({shorts}) => {

    const { title, image, category, datePosted} = shorts;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl rounded-none  hover:cursor-pointer transition-transform">
                <figure className="w-full"><img className="w-full rounded-none" src={image} alt="" /></figure>
                <div className="card-body space-y-10">
                    <h2 className="card-title">{title}</h2>
                    
                    <div className="card-actions justify-between">
                        <p className="font-medium">{category}</p>
                        <span className="flex justify-center items-center gap-2">
                          <BsCalendarDate></BsCalendarDate>
                          <p className="font-light">{datePosted}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shorts;