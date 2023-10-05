import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto font-poppins">
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;