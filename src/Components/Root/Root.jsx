import { Outlet } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import Category from "../JobCategory/Category";
import Footer from "./Home/Footer";

 
const Root = () => {
    return (
        <div>
         <div>
           <div  className=' bg-[#F9F9FF] '>
          <Navbar></Navbar>  
          </div>
          <Outlet></Outlet> 
           </div>
        </div>
    );
};

export default Root;