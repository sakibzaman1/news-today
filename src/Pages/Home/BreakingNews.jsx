import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="bg-[#F3F3F3] p-3 pr-0 mt-10">
            <div className="flex items-center h-10">
                <button className="bg-[#D72050] text-white rounded-none w-28 h-10">Latest</button>
                <Marquee className="gap-10 h-10" pauseOnHover={true} speed={70} gradient={true}>
                    <Link to="/">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                    <Link to="/">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                    <Link to="/">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;