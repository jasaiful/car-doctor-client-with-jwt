import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Shared/Footer/Footer";
import Navbar from "../pages/Home/Shared/Footer/NavBar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;