import BreakingNews from "../Home/BreakingNews";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const About = () => {
    return (
        <div>
             <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2>This is About section</h2>
        </div>
    );
};

export default About;