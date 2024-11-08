import { NavLink } from "react-router-dom";

 
const Navbar = () => {
    let Link= <> 
       <NavLink to='/'><li><a href="">Statistics   </a></li></NavLink> 

       <NavLink to='/appliedJobs'><li><a href="">Applied Jobs </a></li></NavLink> 

       <NavLink ><li><a href="">Blog </a></li></NavLink> 
      </>;
    return (
        <div className=" bg-[#F9F9FF] ">
     <div className="max-w-6xl navbar mx-auto">
     <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <div className="">
            {Link}
            </div>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">  
          {Link}  
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white font-bold h-14 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Start Applying</a>
        </div>
     </div>


     
      </div>
    );
};

export default Navbar;