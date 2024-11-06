import { Outlet } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import Category from "../JobCategory/Category";
import Footer from "./Home/Footer";

 
const Root = () => {
    return (
        <div> 
           <div  className='  '>
          <Navbar></Navbar>  
          <Outlet></Outlet> 
          </div>
          <Footer></Footer> 
        </div>
    );
};

export default Root;