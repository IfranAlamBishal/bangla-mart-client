import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Products from "../Contants/Products/Products";

const Home = () => {
    return (
        <div className=" pt-5 md:pt-10">
            <Navbar></Navbar>
            <div className=" min-h-screen"><Products></Products></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;